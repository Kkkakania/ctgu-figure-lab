export type LedgerEntryType =
  | 'cash_credit'
  | 'bonus_credit'
  | 'usage_debit_cash'
  | 'usage_debit_bonus'
  | 'refund_credit'

export type LedgerEntry = {
  type: LedgerEntryType
  amountCents: number
}

export type WalletBalance = {
  cashCents: number
  bonusCents: number
  totalCents: number
}

export type TopupBonusInput = {
  amountCents: number
  hasBoundPhone: boolean
  hasBoundEmail: boolean
  isFirstTopup: boolean
}

export type DebitResult = {
  cashDebitCents: number
  bonusDebitCents: number
}

const FIRST_TOPUP_BONUS_CAP_CENTS = 10_000

export function applyTopupBonus(input: TopupBonusInput): number {
  if (!input.isFirstTopup || !input.hasBoundPhone || !input.hasBoundEmail) {
    return 0
  }

  if (input.amountCents < 10_000) {
    return 0
  }

  const bonusRate = input.amountCents < 50_000 ? 0.05 : 0.1
  return Math.min(
    FIRST_TOPUP_BONUS_CAP_CENTS,
    Math.floor(input.amountCents * bonusRate),
  )
}

export function getWalletBalance(entries: LedgerEntry[]): WalletBalance {
  let cashCents = 0
  let bonusCents = 0

  for (const entry of entries) {
    if (entry.amountCents < 0) {
      throw new Error('账本金额不能为负数')
    }

    switch (entry.type) {
      case 'cash_credit':
      case 'refund_credit':
        cashCents += entry.amountCents
        break
      case 'bonus_credit':
        bonusCents += entry.amountCents
        break
      case 'usage_debit_cash':
        cashCents -= entry.amountCents
        break
      case 'usage_debit_bonus':
        bonusCents -= entry.amountCents
        break
    }
  }

  return {
    cashCents,
    bonusCents,
    totalCents: cashCents + bonusCents,
  }
}

export function debitWallet(
  balance: Pick<WalletBalance, 'cashCents' | 'bonusCents'>,
  chargeCents: number,
): DebitResult {
  if (chargeCents < 0) {
    throw new Error('扣费金额不能为负数')
  }

  if (balance.cashCents + balance.bonusCents < chargeCents) {
    throw new Error('余额不足')
  }

  const bonusDebitCents = Math.min(balance.bonusCents, chargeCents)
  const cashDebitCents = chargeCents - bonusDebitCents

  return {
    cashDebitCents,
    bonusDebitCents,
  }
}
