import { describe, expect, it } from 'vitest'
import {
  applyTopupBonus,
  debitWallet,
  getWalletBalance,
  type LedgerEntry,
} from './wallet'

describe('wallet ledger', () => {
  it('grants no first-topup bonus below 100 CNY', () => {
    expect(
      applyTopupBonus({
        amountCents: 9_900,
        hasBoundEmail: true,
        hasBoundPhone: true,
        isFirstTopup: true,
      }),
    ).toBe(0)
  })

  it('requires both phone and email binding for first-topup bonus', () => {
    expect(
      applyTopupBonus({
        amountCents: 20_000,
        hasBoundEmail: true,
        hasBoundPhone: false,
        isFirstTopup: true,
      }),
    ).toBe(0)
  })

  it('calculates 5 percent and 10 percent first-topup bonus with cap', () => {
    expect(
      applyTopupBonus({
        amountCents: 20_000,
        hasBoundEmail: true,
        hasBoundPhone: true,
        isFirstTopup: true,
      }),
    ).toBe(1_000)

    expect(
      applyTopupBonus({
        amountCents: 100_000,
        hasBoundEmail: true,
        hasBoundPhone: true,
        isFirstTopup: true,
      }),
    ).toBe(10_000)
  })

  it('separates cash and bonus balances from ledger entries', () => {
    const entries: LedgerEntry[] = [
      { type: 'cash_credit', amountCents: 10_000 },
      { type: 'bonus_credit', amountCents: 500 },
      { type: 'usage_debit_bonus', amountCents: 300 },
      { type: 'usage_debit_cash', amountCents: 200 },
    ]

    expect(getWalletBalance(entries)).toEqual({
      cashCents: 9_800,
      bonusCents: 200,
      totalCents: 10_000,
    })
  })

  it('debits bonus before cash and rejects insufficient balance', () => {
    expect(debitWallet({ cashCents: 1_000, bonusCents: 300 }, 500)).toEqual({
      cashDebitCents: 200,
      bonusDebitCents: 300,
    })

    expect(() => debitWallet({ cashCents: 10, bonusCents: 5 }, 16)).toThrow(
      '余额不足',
    )
  })
})
