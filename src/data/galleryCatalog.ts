export type GalleryTemplate = {
  id: string
  category: string
  categoryLabel: string
  group: string
  tags: string[]
  description: string
  previewName: string
}

// Generated from the clean metadata in /Users/wi/Documents/Study/17 akun/科研绘图_函数库/manifest.json.
// Only template metadata is imported here; raw code, images, caches, and local paths are intentionally excluded.
export const GALLERY_TEMPLATES: GalleryTemplate[] = [
  {
    "id": "line_basic",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "trend"
    ],
    "description": "单条折线",
    "previewName": "line_basic.png"
  },
  {
    "id": "line_multi",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "trend",
      "compare"
    ],
    "description": "多条折线对比",
    "previewName": "line_multi.png"
  },
  {
    "id": "line_step",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "step",
      "discrete"
    ],
    "description": "阶梯折线",
    "previewName": "line_step.png"
  },
  {
    "id": "line_filled",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "area"
    ],
    "description": "曲线+下方填充",
    "previewName": "line_filled.png"
  },
  {
    "id": "line_smoothed",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "smoothing"
    ],
    "description": "原始+滑动平均",
    "previewName": "line_smoothed.png"
  },
  {
    "id": "line_log",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "log"
    ],
    "description": "半对数/双对数图",
    "previewName": "line_log.png"
  },
  {
    "id": "scatter_basic",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "scatter"
    ],
    "description": "单组散点",
    "previewName": "scatter_basic.png"
  },
  {
    "id": "scatter_grouped",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "category"
    ],
    "description": "按类别着色散点",
    "previewName": "scatter_grouped.png"
  },
  {
    "id": "scatter_sized",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "bubble"
    ],
    "description": "气泡图",
    "previewName": "scatter_sized.png"
  },
  {
    "id": "scatter_colored",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "colormap"
    ],
    "description": "连续色映射散点",
    "previewName": "scatter_colored.png"
  },
  {
    "id": "scatter_density",
    "category": "relation",
    "categoryLabel": "关系",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "density",
      "kde"
    ],
    "description": "KDE 着色密度散点",
    "previewName": "scatter_density.png"
  },
  {
    "id": "scatter_regression",
    "category": "relation",
    "categoryLabel": "关系",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "fit",
      "ci"
    ],
    "description": "散点+回归+95% CI",
    "previewName": "scatter_regression.png"
  },
  {
    "id": "bar_basic",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar"
    ],
    "description": "单系列柱状",
    "previewName": "bar_basic.png"
  },
  {
    "id": "bar_grouped",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "group"
    ],
    "description": "分组柱状",
    "previewName": "bar_grouped.png"
  },
  {
    "id": "bar_stacked",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "stack"
    ],
    "description": "堆叠柱状",
    "previewName": "bar_stacked.png"
  },
  {
    "id": "bar_horizontal",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "horizontal"
    ],
    "description": "横向条形",
    "previewName": "bar_horizontal.png"
  },
  {
    "id": "bar_diverging",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "diverge",
      "tornado"
    ],
    "description": "发散柱状/龙卷风",
    "previewName": "bar_diverging.png"
  },
  {
    "id": "bar_lollipop",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "lollipop"
    ],
    "description": "棒棒糖图",
    "previewName": "bar_lollipop.png"
  },
  {
    "id": "bar_dumbbell",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "dumbbell",
      "pair"
    ],
    "description": "哑铃图",
    "previewName": "bar_dumbbell.png"
  },
  {
    "id": "bar_waterfall",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "waterfall"
    ],
    "description": "瀑布图",
    "previewName": "bar_waterfall.png"
  },
  {
    "id": "histogram_basic",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "histogram"
    ],
    "description": "基础直方图",
    "previewName": "histogram_basic.png"
  },
  {
    "id": "histogram_overlay",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "histogram",
      "compare"
    ],
    "description": "多组叠加直方",
    "previewName": "histogram_overlay.png"
  },
  {
    "id": "histogram_2d",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "hist2d",
      "density"
    ],
    "description": "二维直方图",
    "previewName": "histogram_2d.png"
  },
  {
    "id": "histogram_step",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "histogram",
      "step"
    ],
    "description": "阶梯直方图",
    "previewName": "histogram_step.png"
  },
  {
    "id": "box_basic",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "box"
    ],
    "description": "基础箱线图",
    "previewName": "box_basic.png"
  },
  {
    "id": "box_jittered",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "box",
      "jitter"
    ],
    "description": "箱线+jitter散点",
    "previewName": "box_jittered.png"
  },
  {
    "id": "box_notched",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "box",
      "notch"
    ],
    "description": "带凹槽箱线",
    "previewName": "box_notched.png"
  },
  {
    "id": "violin_basic",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "violin"
    ],
    "description": "小提琴图",
    "previewName": "violin_basic.png"
  },
  {
    "id": "violin_split",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "violin",
      "split"
    ],
    "description": "左右拆分小提琴",
    "previewName": "violin_split.png"
  },
  {
    "id": "ridgeline",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "ridgeline",
      "density"
    ],
    "description": "山脊图",
    "previewName": "ridgeline.png"
  },
  {
    "id": "errorbar_basic",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "errorbar"
    ],
    "description": "标准误差棒",
    "previewName": "errorbar_basic.png"
  },
  {
    "id": "errorbar_filled",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "band",
      "error"
    ],
    "description": "阴影误差带",
    "previewName": "errorbar_filled.png"
  },
  {
    "id": "confidence_band",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "band",
      "group"
    ],
    "description": "多组均值±std",
    "previewName": "confidence_band.png"
  },
  {
    "id": "uncertainty_fan",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "fan",
      "quantile"
    ],
    "description": "扇形不确定性",
    "previewName": "uncertainty_fan.png"
  },
  {
    "id": "bland_altman",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "agreement"
    ],
    "description": "Bland-Altman 一致性",
    "previewName": "bland_altman.png"
  },
  {
    "id": "qq_plot",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "qq",
      "normality"
    ],
    "description": "Q-Q 正态性",
    "previewName": "qq_plot.png"
  },
  {
    "id": "forest_plot",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "forest",
      "meta"
    ],
    "description": "森林图",
    "previewName": "forest_plot.png"
  },
  {
    "id": "paired_slope",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "slope",
      "paired"
    ],
    "description": "配对斜率",
    "previewName": "paired_slope.png"
  },
  {
    "id": "heatmap_basic",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "heatmap"
    ],
    "description": "基础热力图",
    "previewName": "heatmap_basic.png"
  },
  {
    "id": "heatmap_annotated",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "heatmap",
      "annot"
    ],
    "description": "带数值标注热力",
    "previewName": "heatmap_annotated.png"
  },
  {
    "id": "heatmap_clustered",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "heatmap",
      "cluster"
    ],
    "description": "聚类后热力图",
    "previewName": "heatmap_clustered.png"
  },
  {
    "id": "correlation_matrix",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "corr",
      "heatmap"
    ],
    "description": "相关系数矩阵",
    "previewName": "correlation_matrix.png"
  },
  {
    "id": "double_triangle_heatmap",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "heatmap",
      "triangle"
    ],
    "description": "双三角热力图",
    "previewName": "double_triangle_heatmap.png"
  },
  {
    "id": "calendar_heatmap",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "calendar",
      "heatmap"
    ],
    "description": "日历热力图",
    "previewName": "calendar_heatmap.png"
  },
  {
    "id": "bubble_matrix",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "bubble",
      "matrix"
    ],
    "description": "矩阵气泡图",
    "previewName": "bubble_matrix.png"
  },
  {
    "id": "confusion_matrix",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "confusion",
      "classify"
    ],
    "description": "混淆矩阵",
    "previewName": "confusion_matrix.png"
  },
  {
    "id": "contour_filled",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "contour",
      "filled"
    ],
    "description": "填充等高线",
    "previewName": "contour_filled.png"
  },
  {
    "id": "contour_lines",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "contour",
      "iso"
    ],
    "description": "等值线",
    "previewName": "contour_lines.png"
  },
  {
    "id": "density_kde2d",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "kde",
      "contour"
    ],
    "description": "2D KDE 等高线",
    "previewName": "density_kde2d.png"
  },
  {
    "id": "density_hexbin",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "hexbin",
      "density"
    ],
    "description": "六边形分箱",
    "previewName": "density_hexbin.png"
  },
  {
    "id": "quiver",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "quiver",
      "vector"
    ],
    "description": "矢量场箭头",
    "previewName": "quiver.png"
  },
  {
    "id": "streamplot",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "stream",
      "vector"
    ],
    "description": "流线图",
    "previewName": "streamplot.png"
  },
  {
    "id": "radar_chart",
    "category": "ranking",
    "categoryLabel": "排序",
    "group": "通用科研图表",
    "tags": [
      "radar"
    ],
    "description": "雷达图",
    "previewName": "radar_chart.png"
  },
  {
    "id": "parallel_coordinates",
    "category": "ranking",
    "categoryLabel": "排序",
    "group": "通用科研图表",
    "tags": [
      "parallel",
      "multivar"
    ],
    "description": "平行坐标",
    "previewName": "parallel_coordinates.png"
  },
  {
    "id": "waffle_chart",
    "category": "ranking",
    "categoryLabel": "排序",
    "group": "通用科研图表",
    "tags": [
      "waffle",
      "proportion"
    ],
    "description": "华夫饼图",
    "previewName": "waffle_chart.png"
  },
  {
    "id": "dot_plot_grouped",
    "category": "ranking",
    "categoryLabel": "排序",
    "group": "通用科研图表",
    "tags": [
      "dot",
      "group"
    ],
    "description": "分组点图",
    "previewName": "dot_plot_grouped.png"
  },
  {
    "id": "timeseries_basic",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "time",
      "series"
    ],
    "description": "单序列时间",
    "previewName": "timeseries_basic.png"
  },
  {
    "id": "timeseries_multi",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "time",
      "series",
      "compare"
    ],
    "description": "多序列时间",
    "previewName": "timeseries_multi.png"
  },
  {
    "id": "area_signed",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "area",
      "signed"
    ],
    "description": "正负填充区",
    "previewName": "area_signed.png"
  },
  {
    "id": "area_stacked",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "area",
      "stack"
    ],
    "description": "堆叠面积",
    "previewName": "area_stacked.png"
  },
  {
    "id": "autocorrelation",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "acf",
      "lag"
    ],
    "description": "自相关函数",
    "previewName": "autocorrelation.png"
  },
  {
    "id": "moving_average",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "smoothing",
      "window"
    ],
    "description": "移动平均",
    "previewName": "moving_average.png"
  },
  {
    "id": "zoomed_inset",
    "category": "composite",
    "categoryLabel": "组合",
    "group": "通用科研图表",
    "tags": [
      "inset",
      "zoom"
    ],
    "description": "局部放大插图",
    "previewName": "zoomed_inset.png"
  },
  {
    "id": "broken_axis",
    "category": "composite",
    "categoryLabel": "组合",
    "group": "通用科研图表",
    "tags": [
      "broken",
      "axis"
    ],
    "description": "折断坐标轴",
    "previewName": "broken_axis.png"
  },
  {
    "id": "dual_yaxis",
    "category": "composite",
    "categoryLabel": "组合",
    "group": "通用科研图表",
    "tags": [
      "dual",
      "axis"
    ],
    "description": "双 Y 轴",
    "previewName": "dual_yaxis.png"
  },
  {
    "id": "joint_marginal",
    "category": "composite",
    "categoryLabel": "组合",
    "group": "通用科研图表",
    "tags": [
      "joint",
      "marginal"
    ],
    "description": "主散点+边缘直方",
    "previewName": "joint_marginal.png"
  },
  {
    "id": "sankey_basic",
    "category": "flow",
    "categoryLabel": "流向",
    "group": "通用科研图表",
    "tags": [
      "sankey"
    ],
    "description": "桑基流图",
    "previewName": "sankey_basic.png"
  },
  {
    "id": "polar_basic",
    "category": "polar",
    "categoryLabel": "极坐标",
    "group": "通用科研图表",
    "tags": [
      "polar",
      "curve"
    ],
    "description": "极坐标曲线",
    "previewName": "polar_basic.png"
  },
  {
    "id": "polar_rose",
    "category": "polar",
    "categoryLabel": "极坐标",
    "group": "通用科研图表",
    "tags": [
      "rose",
      "direction"
    ],
    "description": "极坐标玫瑰图",
    "previewName": "polar_rose.png"
  },
  {
    "id": "surface_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "surface"
    ],
    "description": "三维曲面",
    "previewName": "surface_3d.png"
  },
  {
    "id": "wireframe_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "wireframe",
      "proj"
    ],
    "description": "线框+投影等高",
    "previewName": "wireframe_3d.png"
  },
  {
    "id": "scatter_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "scatter"
    ],
    "description": "三维散点",
    "previewName": "scatter_3d.png"
  },
  {
    "id": "bar_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "bar"
    ],
    "description": "三维柱状",
    "previewName": "bar_3d.png"
  },
  {
    "id": "fft_spectrum",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "fft",
      "spectrum"
    ],
    "description": "FFT 单边幅值谱",
    "previewName": "fft_spectrum.png"
  },
  {
    "id": "welch_psd",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "welch",
      "psd"
    ],
    "description": "Welch PSD",
    "previewName": "welch_psd.png"
  },
  {
    "id": "spectrogram",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "stft",
      "tf"
    ],
    "description": "时频图",
    "previewName": "spectrogram.png"
  },
  {
    "id": "step_response",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "step",
      "system"
    ],
    "description": "阶跃响应",
    "previewName": "step_response.png"
  },
  {
    "id": "bode_diagram",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "bode",
      "frequency"
    ],
    "description": "Bode 幅频+相频",
    "previewName": "bode_diagram.png"
  },
  {
    "id": "nyquist_diagram",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "nyquist",
      "frequency"
    ],
    "description": "Nyquist 频率特性",
    "previewName": "nyquist_diagram.png"
  },
  {
    "id": "smith_chart",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "smith",
      "impedance"
    ],
    "description": "Smith 圆图",
    "previewName": "smith_chart.png"
  },
  {
    "id": "line_with_markers",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "marker"
    ],
    "description": "带显著标记折线",
    "previewName": "line_with_markers.png"
  },
  {
    "id": "line_dashed_styles",
    "category": "basic",
    "categoryLabel": "基础",
    "group": "通用科研图表",
    "tags": [
      "line",
      "style"
    ],
    "description": "不同线型对照",
    "previewName": "line_dashed_styles.png"
  },
  {
    "id": "scatter_marginal_rug",
    "category": "relation",
    "categoryLabel": "关系",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "rug"
    ],
    "description": "散点+轴边 rug",
    "previewName": "scatter_marginal_rug.png"
  },
  {
    "id": "scatter_3way",
    "category": "relation",
    "categoryLabel": "关系",
    "group": "通用科研图表",
    "tags": [
      "scatter",
      "encoding"
    ],
    "description": "颜色+大小+形状三编码散点",
    "previewName": "scatter_3way.png"
  },
  {
    "id": "bar_error",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "error"
    ],
    "description": "柱状+误差棒",
    "previewName": "bar_error.png"
  },
  {
    "id": "bar_percent_stack",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "percent"
    ],
    "description": "100% 堆叠柱状",
    "previewName": "bar_percent_stack.png"
  },
  {
    "id": "bar_pareto",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "pareto",
      "cumulative"
    ],
    "description": "帕累托图",
    "previewName": "bar_pareto.png"
  },
  {
    "id": "bar_combo",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "bar",
      "line",
      "combo"
    ],
    "description": "柱+折线组合",
    "previewName": "bar_combo.png"
  },
  {
    "id": "violin_with_box",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "violin",
      "box"
    ],
    "description": "小提琴+内嵌箱线",
    "previewName": "violin_with_box.png"
  },
  {
    "id": "ecdf",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "ecdf",
      "cumulative"
    ],
    "description": "经验累积分布",
    "previewName": "ecdf.png"
  },
  {
    "id": "histogram_cumulative",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "histogram",
      "cumulative"
    ],
    "description": "累积直方图",
    "previewName": "histogram_cumulative.png"
  },
  {
    "id": "histogram_log",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "histogram",
      "log"
    ],
    "description": "对数分箱直方图",
    "previewName": "histogram_log.png"
  },
  {
    "id": "residual_plot",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "residual",
      "regression"
    ],
    "description": "回归残差图",
    "previewName": "residual_plot.png"
  },
  {
    "id": "roc_curve",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "roc",
      "auc",
      "classify"
    ],
    "description": "ROC + AUC",
    "previewName": "roc_curve.png"
  },
  {
    "id": "calibration_curve",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "calibration",
      "classify"
    ],
    "description": "校准曲线",
    "previewName": "calibration_curve.png"
  },
  {
    "id": "lift_curve",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "lift",
      "gain"
    ],
    "description": "增益/提升曲线",
    "previewName": "lift_curve.png"
  },
  {
    "id": "dendrogram",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "dendrogram",
      "cluster"
    ],
    "description": "层次聚类树",
    "previewName": "dendrogram.png"
  },
  {
    "id": "heatmap_dendro",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "heatmap",
      "dendro"
    ],
    "description": "热力图+侧边树",
    "previewName": "heatmap_dendro.png"
  },
  {
    "id": "matrix_correlogram",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "corr",
      "bubble"
    ],
    "description": "气泡+颜色相关阵",
    "previewName": "matrix_correlogram.png"
  },
  {
    "id": "circular_heatmap",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "polar",
      "heatmap"
    ],
    "description": "环形热力图",
    "previewName": "circular_heatmap.png"
  },
  {
    "id": "contour_3d",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "contour",
      "3d"
    ],
    "description": "三维等高线",
    "previewName": "contour_3d.png"
  },
  {
    "id": "divergence_overlay",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "divergence",
      "stream"
    ],
    "description": "散度场+流线",
    "previewName": "divergence_overlay.png"
  },
  {
    "id": "potential_field",
    "category": "field",
    "categoryLabel": "场图",
    "group": "通用科研图表",
    "tags": [
      "potential",
      "equipot"
    ],
    "description": "等势线+梯度",
    "previewName": "potential_field.png"
  },
  {
    "id": "seasonal_subseries",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "seasonal"
    ],
    "description": "季节子序列图",
    "previewName": "seasonal_subseries.png"
  },
  {
    "id": "lag_plot",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "lag",
      "scatter"
    ],
    "description": "滞后散点",
    "previewName": "lag_plot.png"
  },
  {
    "id": "event_timeline",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "event",
      "timeline"
    ],
    "description": "多类别事件时间轴",
    "previewName": "event_timeline.png"
  },
  {
    "id": "candlestick",
    "category": "time",
    "categoryLabel": "时间序列",
    "group": "通用科研图表",
    "tags": [
      "ohlc",
      "candle"
    ],
    "description": "蜡烛图",
    "previewName": "candlestick.png"
  },
  {
    "id": "polar_scatter",
    "category": "polar",
    "categoryLabel": "极坐标",
    "group": "通用科研图表",
    "tags": [
      "polar",
      "scatter"
    ],
    "description": "极坐标散点",
    "previewName": "polar_scatter.png"
  },
  {
    "id": "polar_heatmap",
    "category": "polar",
    "categoryLabel": "极坐标",
    "group": "通用科研图表",
    "tags": [
      "polar",
      "heatmap"
    ],
    "description": "极坐标连续热力",
    "previewName": "polar_heatmap.png"
  },
  {
    "id": "compass_plot",
    "category": "polar",
    "categoryLabel": "极坐标",
    "group": "通用科研图表",
    "tags": [
      "compass",
      "vector"
    ],
    "description": "罗盘图",
    "previewName": "compass_plot.png"
  },
  {
    "id": "trisurf_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "trisurf",
      "irregular"
    ],
    "description": "三角化曲面",
    "previewName": "trisurf_3d.png"
  },
  {
    "id": "ribbon_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "ribbon"
    ],
    "description": "3D 条带",
    "previewName": "ribbon_3d.png"
  },
  {
    "id": "contour_filled_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "contour",
      "filled"
    ],
    "description": "3D 填充等高线",
    "previewName": "contour_filled_3d.png"
  },
  {
    "id": "impulse_response",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "impulse"
    ],
    "description": "二阶冲激响应",
    "previewName": "impulse_response.png"
  },
  {
    "id": "pole_zero",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "pole",
      "zero"
    ],
    "description": "极点零点图",
    "previewName": "pole_zero.png"
  },
  {
    "id": "cross_correlation",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "xcorr",
      "lag"
    ],
    "description": "互相关函数",
    "previewName": "cross_correlation.png"
  },
  {
    "id": "three_phase_waveform",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "three-phase",
      "phasor"
    ],
    "description": "三相波形+相量",
    "previewName": "three_phase_waveform.png"
  },
  {
    "id": "power_triangle",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "P",
      "Q",
      "S"
    ],
    "description": "有功-无功-视在三角形",
    "previewName": "power_triangle.png"
  },
  {
    "id": "impedance_locus",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "impedance",
      "RLC"
    ],
    "description": "RLC 阻抗轨迹",
    "previewName": "impedance_locus.png"
  },
  {
    "id": "wavelet_scalogram",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "wavelet",
      "tf"
    ],
    "description": "小波时频图",
    "previewName": "wavelet_scalogram.png"
  },
  {
    "id": "harmonic_spectrum",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "harmonic",
      "FFT"
    ],
    "description": "谐波频谱条形",
    "previewName": "harmonic_spectrum.png"
  },
  {
    "id": "thd_bars",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "THD",
      "compare"
    ],
    "description": "多负载 THD 对比",
    "previewName": "thd_bars.png"
  },
  {
    "id": "voltage_sag",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "sag",
      "event"
    ],
    "description": "电压暂降事件",
    "previewName": "voltage_sag.png"
  },
  {
    "id": "inrush_current",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "inrush",
      "transient"
    ],
    "description": "励磁涌流衰减",
    "previewName": "inrush_current.png"
  },
  {
    "id": "dq_transform",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "dq",
      "park"
    ],
    "description": "abc→dq0 旋转坐标",
    "previewName": "dq_transform.png"
  },
  {
    "id": "clarke_transform",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "clarke",
      "alphabeta"
    ],
    "description": "αβ 静止坐标轨迹",
    "previewName": "clarke_transform.png"
  },
  {
    "id": "pwm_modulation",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "PWM",
      "modulation"
    ],
    "description": "正弦 PWM 波形",
    "previewName": "pwm_modulation.png"
  },
  {
    "id": "svpwm_hexagon",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "SVPWM",
      "hexagon"
    ],
    "description": "空间矢量六边形",
    "previewName": "svpwm_hexagon.png"
  },
  {
    "id": "load_curve_daily",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "load",
      "peak"
    ],
    "description": "24h 负荷曲线",
    "previewName": "load_curve_daily.png"
  },
  {
    "id": "iv_curve",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "PV",
      "IV"
    ],
    "description": "光伏 I-V P-V 特性",
    "previewName": "iv_curve.png"
  },
  {
    "id": "pv_mppt",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "PV",
      "MPPT"
    ],
    "description": "MPPT 追踪过程",
    "previewName": "pv_mppt.png"
  },
  {
    "id": "power_factor_locus",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "PF",
      "locus"
    ],
    "description": "功率因数日变化",
    "previewName": "power_factor_locus.png"
  },
  {
    "id": "frequency_drift",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "frequency",
      "drift"
    ],
    "description": "电网频率漂移",
    "previewName": "frequency_drift.png"
  },
  {
    "id": "dc_ripple",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "ripple",
      "filter"
    ],
    "description": "整流纹波滤波",
    "previewName": "dc_ripple.png"
  },
  {
    "id": "battery_discharge",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "battery",
      "SOC"
    ],
    "description": "电池放电曲线族",
    "previewName": "battery_discharge.png"
  },
  {
    "id": "root_locus",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "root",
      "locus"
    ],
    "description": "根轨迹",
    "previewName": "root_locus.png"
  },
  {
    "id": "phase_margin",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "margin",
      "bode"
    ],
    "description": "增益相位裕度",
    "previewName": "phase_margin.png"
  },
  {
    "id": "sensitivity_function",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "S",
      "T"
    ],
    "description": "灵敏度函数族",
    "previewName": "sensitivity_function.png"
  },
  {
    "id": "ramp_response",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "ramp",
      "response"
    ],
    "description": "斜坡响应",
    "previewName": "ramp_response.png"
  },
  {
    "id": "pid_tuning",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "PID",
      "step"
    ],
    "description": "PID 参数对比",
    "previewName": "pid_tuning.png"
  },
  {
    "id": "observer_estimate",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "observer",
      "state"
    ],
    "description": "状态观测器估计",
    "previewName": "observer_estimate.png"
  },
  {
    "id": "phase_portrait",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "phase",
      "portrait"
    ],
    "description": "非线性相图",
    "previewName": "phase_portrait.png"
  },
  {
    "id": "limit_cycle",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "limit_cycle",
      "vdp"
    ],
    "description": "Van der Pol 极限环",
    "previewName": "limit_cycle.png"
  },
  {
    "id": "lyapunov_surface",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "lyapunov",
      "3d"
    ],
    "description": "Lyapunov 函数曲面",
    "previewName": "lyapunov_surface.png"
  },
  {
    "id": "nichols_chart",
    "category": "control",
    "categoryLabel": "控制",
    "group": "工程与电气能源",
    "tags": [
      "nichols"
    ],
    "description": "Nichols 图",
    "previewName": "nichols_chart.png"
  },
  {
    "id": "cepstrum",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "cepstrum",
      "harmonic"
    ],
    "description": "倒谱",
    "previewName": "cepstrum.png"
  },
  {
    "id": "envelope_detect",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "hilbert",
      "envelope"
    ],
    "description": "Hilbert 包络",
    "previewName": "envelope_detect.png"
  },
  {
    "id": "group_delay",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "group_delay"
    ],
    "description": "滤波器群延迟",
    "previewName": "group_delay.png"
  },
  {
    "id": "fir_design",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "FIR",
      "filter"
    ],
    "description": "FIR 设计",
    "previewName": "fir_design.png"
  },
  {
    "id": "iir_design",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "IIR",
      "filter"
    ],
    "description": "IIR 设计对比",
    "previewName": "iir_design.png"
  },
  {
    "id": "window_compare",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "window",
      "leakage"
    ],
    "description": "窗函数对比",
    "previewName": "window_compare.png"
  },
  {
    "id": "multitaper_psd",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "multitaper",
      "PSD"
    ],
    "description": "多窗 PSD",
    "previewName": "multitaper_psd.png"
  },
  {
    "id": "periodogram",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "periodogram"
    ],
    "description": "周期图对比",
    "previewName": "periodogram.png"
  },
  {
    "id": "hilbert_envelope",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "hilbert",
      "IF"
    ],
    "description": "瞬时频率",
    "previewName": "hilbert_envelope.png"
  },
  {
    "id": "coherence_plot",
    "category": "signal",
    "categoryLabel": "信号",
    "group": "工程与电气能源",
    "tags": [
      "coherence"
    ],
    "description": "相干函数",
    "previewName": "coherence_plot.png"
  },
  {
    "id": "antenna_pattern_polar",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "antenna",
      "polar"
    ],
    "description": "方向图极坐标",
    "previewName": "antenna_pattern_polar.png"
  },
  {
    "id": "antenna_pattern_3d",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "antenna",
      "3d"
    ],
    "description": "3D 方向图",
    "previewName": "antenna_pattern_3d.png"
  },
  {
    "id": "vswr_curve",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "VSWR",
      "return_loss"
    ],
    "description": "VSWR 曲线",
    "previewName": "vswr_curve.png"
  },
  {
    "id": "constellation",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "QAM",
      "constellation"
    ],
    "description": "星座图",
    "previewName": "constellation.png"
  },
  {
    "id": "eye_diagram",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "eye",
      "digital"
    ],
    "description": "眼图",
    "previewName": "eye_diagram.png"
  },
  {
    "id": "ber_curve",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "BER",
      "modulation"
    ],
    "description": "误码率曲线",
    "previewName": "ber_curve.png"
  },
  {
    "id": "capacity_curve",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "shannon",
      "capacity"
    ],
    "description": "信道容量",
    "previewName": "capacity_curve.png"
  },
  {
    "id": "spectrum_mask",
    "category": "rf",
    "categoryLabel": "射频",
    "group": "工程与电气能源",
    "tags": [
      "spectrum",
      "mask"
    ],
    "description": "频谱模板",
    "previewName": "spectrum_mask.png"
  },
  {
    "id": "learning_curve",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "learning",
      "size"
    ],
    "description": "学习曲线",
    "previewName": "learning_curve.png"
  },
  {
    "id": "precision_recall",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "PR",
      "AP"
    ],
    "description": "PR 曲线",
    "previewName": "precision_recall.png"
  },
  {
    "id": "silhouette_plot",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "silhouette",
      "cluster"
    ],
    "description": "轮廓系数图",
    "previewName": "silhouette_plot.png"
  },
  {
    "id": "tsne_scatter",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "embedding",
      "scatter"
    ],
    "description": "降维散点",
    "previewName": "tsne_scatter.png"
  },
  {
    "id": "multiclass_roc",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "ROC",
      "OvR"
    ],
    "description": "多类 ROC",
    "previewName": "multiclass_roc.png"
  },
  {
    "id": "feature_importance",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "importance",
      "bar"
    ],
    "description": "特征重要性",
    "previewName": "feature_importance.png"
  },
  {
    "id": "partial_dependence",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "PDP"
    ],
    "description": "偏依赖曲线",
    "previewName": "partial_dependence.png"
  },
  {
    "id": "validation_curve",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "validation",
      "hyperparam"
    ],
    "description": "超参数验证曲线",
    "previewName": "validation_curve.png"
  },
  {
    "id": "cluster_compare",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "cluster",
      "compare"
    ],
    "description": "多算法聚类对比",
    "previewName": "cluster_compare.png"
  },
  {
    "id": "shap_summary",
    "category": "ml",
    "categoryLabel": "机器学习",
    "group": "AI 与高维分析",
    "tags": [
      "SHAP",
      "explain"
    ],
    "description": "SHAP 摘要",
    "previewName": "shap_summary.png"
  },
  {
    "id": "andrews_curves",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "andrews",
      "fourier"
    ],
    "description": "Andrews 曲线",
    "previewName": "andrews_curves.png"
  },
  {
    "id": "star_plot",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "star",
      "radar"
    ],
    "description": "多个雷达星图",
    "previewName": "star_plot.png"
  },
  {
    "id": "profile_plot",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "profile"
    ],
    "description": "剖面图",
    "previewName": "profile_plot.png"
  },
  {
    "id": "pairs_plot",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "pairs",
      "scatter"
    ],
    "description": "散点矩阵",
    "previewName": "pairs_plot.png"
  },
  {
    "id": "biplot_pca",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "PCA",
      "biplot"
    ],
    "description": "PCA 双标图",
    "previewName": "biplot_pca.png"
  },
  {
    "id": "scree_plot",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "PCA",
      "scree"
    ],
    "description": "碎石图",
    "previewName": "scree_plot.png"
  },
  {
    "id": "dist_normal_family",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "normal",
      "pdf"
    ],
    "description": "正态分布族",
    "previewName": "dist_normal_family.png"
  },
  {
    "id": "dist_t_family",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "t",
      "pdf"
    ],
    "description": "t 分布族",
    "previewName": "dist_t_family.png"
  },
  {
    "id": "dist_chi_family",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "chi2",
      "pdf"
    ],
    "description": "卡方分布族",
    "previewName": "dist_chi_family.png"
  },
  {
    "id": "dist_beta_family",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "beta",
      "pdf"
    ],
    "description": "Beta 分布族",
    "previewName": "dist_beta_family.png"
  },
  {
    "id": "dist_mixture",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "GMM",
      "mixture"
    ],
    "description": "高斯混合",
    "previewName": "dist_mixture.png"
  },
  {
    "id": "swarm_plot",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "swarm"
    ],
    "description": "蜂群图",
    "previewName": "swarm_plot.png"
  },
  {
    "id": "raincloud",
    "category": "distribution",
    "categoryLabel": "分布",
    "group": "通用科研图表",
    "tags": [
      "raincloud"
    ],
    "description": "雨云图",
    "previewName": "raincloud.png"
  },
  {
    "id": "funnel_chart",
    "category": "specialty",
    "categoryLabel": "专题",
    "group": "专题表达",
    "tags": [
      "funnel",
      "conversion"
    ],
    "description": "漏斗图",
    "previewName": "funnel_chart.png"
  },
  {
    "id": "likert_diverging",
    "category": "specialty",
    "categoryLabel": "专题",
    "group": "专题表达",
    "tags": [
      "likert",
      "survey"
    ],
    "description": "Likert 量表",
    "previewName": "likert_diverging.png"
  },
  {
    "id": "tree_diagram",
    "category": "specialty",
    "categoryLabel": "专题",
    "group": "专题表达",
    "tags": [
      "tree",
      "decision"
    ],
    "description": "决策树图",
    "previewName": "tree_diagram.png"
  },
  {
    "id": "mosaic_plot",
    "category": "specialty",
    "categoryLabel": "专题",
    "group": "专题表达",
    "tags": [
      "mosaic",
      "contingency"
    ],
    "description": "马赛克图",
    "previewName": "mosaic_plot.png"
  },
  {
    "id": "choropleth_grid",
    "category": "specialty",
    "categoryLabel": "专题",
    "group": "专题表达",
    "tags": [
      "choropleth",
      "grid"
    ],
    "description": "格点 choropleth",
    "previewName": "choropleth_grid.png"
  },
  {
    "id": "small_multiples",
    "category": "composite",
    "categoryLabel": "组合",
    "group": "通用科研图表",
    "tags": [
      "trellis"
    ],
    "description": "小型多图阵列",
    "previewName": "small_multiples.png"
  },
  {
    "id": "heatmap_categorical",
    "category": "matrix",
    "categoryLabel": "矩阵",
    "group": "通用科研图表",
    "tags": [
      "heatmap",
      "categorical"
    ],
    "description": "分类热力图",
    "previewName": "heatmap_categorical.png"
  },
  {
    "id": "forest_subgroup",
    "category": "statistical",
    "categoryLabel": "统计推断",
    "group": "通用科研图表",
    "tags": [
      "forest",
      "subgroup"
    ],
    "description": "分组森林图",
    "previewName": "forest_subgroup.png"
  },
  {
    "id": "quiver_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "quiver"
    ],
    "description": "3D 矢量场",
    "previewName": "quiver_3d.png"
  },
  {
    "id": "slice_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "slice"
    ],
    "description": "体积切片",
    "previewName": "slice_3d.png"
  },
  {
    "id": "isosurface",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "isosurface"
    ],
    "description": "等值面",
    "previewName": "isosurface.png"
  },
  {
    "id": "orbital_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "spherical_harmonic"
    ],
    "description": "球谐函数",
    "previewName": "orbital_3d.png"
  },
  {
    "id": "tube_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "tube",
      "helix"
    ],
    "description": "3D 螺旋管",
    "previewName": "tube_3d.png"
  },
  {
    "id": "line_collection_3d",
    "category": "3d",
    "categoryLabel": "三维",
    "group": "通用科研图表",
    "tags": [
      "stacked",
      "curves"
    ],
    "description": "3D 曲线堆叠",
    "previewName": "line_collection_3d.png"
  },
  {
    "id": "velocity_field_cfd",
    "category": "cfd",
    "categoryLabel": "流体",
    "group": "工程与电气能源",
    "tags": [
      "velocity",
      "quiver"
    ],
    "description": "CFD 速度场+矢量箭头",
    "previewName": "velocity_field_cfd.png"
  },
  {
    "id": "pressure_contour",
    "category": "cfd",
    "categoryLabel": "流体",
    "group": "工程与电气能源",
    "tags": [
      "pressure",
      "contour"
    ],
    "description": "压力等高线（圆柱绕流）",
    "previewName": "pressure_contour.png"
  },
  {
    "id": "vorticity_map",
    "category": "cfd",
    "categoryLabel": "流体",
    "group": "工程与电气能源",
    "tags": [
      "vorticity"
    ],
    "description": "涡量场",
    "previewName": "vorticity_map.png"
  },
  {
    "id": "streamlines_colored",
    "category": "cfd",
    "categoryLabel": "流体",
    "group": "工程与电气能源",
    "tags": [
      "streamlines"
    ],
    "description": "按速度模值着色流线",
    "previewName": "streamlines_colored.png"
  },
  {
    "id": "residual_history",
    "category": "cfd",
    "categoryLabel": "流体",
    "group": "工程与电气能源",
    "tags": [
      "residual",
      "iteration"
    ],
    "description": "CFD 迭代残差曲线",
    "previewName": "residual_history.png"
  },
  {
    "id": "convergence_curve",
    "category": "optimization",
    "categoryLabel": "优化",
    "group": "AI 与高维分析",
    "tags": [
      "loss",
      "convergence"
    ],
    "description": "多算法收敛对比",
    "previewName": "convergence_curve.png"
  },
  {
    "id": "pareto_front",
    "category": "optimization",
    "categoryLabel": "优化",
    "group": "AI 与高维分析",
    "tags": [
      "pareto",
      "multiobj"
    ],
    "description": "Pareto 前沿",
    "previewName": "pareto_front.png"
  },
  {
    "id": "fitness_landscape",
    "category": "optimization",
    "categoryLabel": "优化",
    "group": "AI 与高维分析",
    "tags": [
      "landscape",
      "population"
    ],
    "description": "适应度地形",
    "previewName": "fitness_landscape.png"
  },
  {
    "id": "ga_evolution",
    "category": "optimization",
    "categoryLabel": "优化",
    "group": "AI 与高维分析",
    "tags": [
      "GA",
      "fitness"
    ],
    "description": "GA 适应度演化",
    "previewName": "ga_evolution.png"
  },
  {
    "id": "gradient_descent_path",
    "category": "optimization",
    "categoryLabel": "优化",
    "group": "AI 与高维分析",
    "tags": [
      "gradient",
      "path"
    ],
    "description": "梯度下降路径",
    "previewName": "gradient_descent_path.png"
  },
  {
    "id": "training_curves",
    "category": "nn",
    "categoryLabel": "神经网络",
    "group": "AI 与高维分析",
    "tags": [
      "loss",
      "accuracy"
    ],
    "description": "训练曲线（loss+acc）",
    "previewName": "training_curves.png"
  },
  {
    "id": "network_architecture",
    "category": "nn",
    "categoryLabel": "神经网络",
    "group": "AI 与高维分析",
    "tags": [
      "architecture"
    ],
    "description": "全连接网络结构图",
    "previewName": "network_architecture.png"
  },
  {
    "id": "decision_boundary",
    "category": "nn",
    "categoryLabel": "神经网络",
    "group": "AI 与高维分析",
    "tags": [
      "boundary",
      "classify"
    ],
    "description": "决策边界",
    "previewName": "decision_boundary.png"
  },
  {
    "id": "activation_heatmap",
    "category": "nn",
    "categoryLabel": "神经网络",
    "group": "AI 与高维分析",
    "tags": [
      "activation"
    ],
    "description": "隐层激活热力图",
    "previewName": "activation_heatmap.png"
  },
  {
    "id": "weight_distribution",
    "category": "nn",
    "categoryLabel": "神经网络",
    "group": "AI 与高维分析",
    "tags": [
      "weight",
      "init"
    ],
    "description": "权重分布对比",
    "previewName": "weight_distribution.png"
  },
  {
    "id": "confusion_per_class",
    "category": "nn",
    "categoryLabel": "神经网络",
    "group": "AI 与高维分析",
    "tags": [
      "metric",
      "classify"
    ],
    "description": "每类精度/召回/F1",
    "previewName": "confusion_per_class.png"
  },
  {
    "id": "swing_curve",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "stability",
      "transient"
    ],
    "description": "多机功角摇摆曲线",
    "previewName": "swing_curve.png"
  },
  {
    "id": "pv_nose_curve",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "voltage",
      "stability"
    ],
    "description": "P-V 鼻形曲线",
    "previewName": "pv_nose_curve.png"
  },
  {
    "id": "equal_area_criterion",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "stability",
      "criterion"
    ],
    "description": "等面积法则",
    "previewName": "equal_area_criterion.png"
  },
  {
    "id": "relay_tcc",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "protection",
      "relay"
    ],
    "description": "反时限保护特性",
    "previewName": "relay_tcc.png"
  },
  {
    "id": "fault_oscillography",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "fault",
      "oscillography"
    ],
    "description": "三相短路录波",
    "previewName": "fault_oscillography.png"
  },
  {
    "id": "economic_dispatch",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "dispatch",
      "economics"
    ],
    "description": "经济调度等微增率",
    "previewName": "economic_dispatch.png"
  },
  {
    "id": "feeder_voltage_profile",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "distribution",
      "voltage"
    ],
    "description": "馈线电压分布",
    "previewName": "feeder_voltage_profile.png"
  },
  {
    "id": "grid_frequency_response",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "frequency",
      "inertia"
    ],
    "description": "电网频率响应",
    "previewName": "grid_frequency_response.png"
  },
  {
    "id": "generator_capability",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "generator",
      "PQ"
    ],
    "description": "发电机运行极限圆图",
    "previewName": "generator_capability.png"
  },
  {
    "id": "line_loading_heatmap",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "loading",
      "heatmap"
    ],
    "description": "线路负载率热力图",
    "previewName": "line_loading_heatmap.png"
  },
  {
    "id": "wind_power_curve",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "wind",
      "power_curve"
    ],
    "description": "风机功率曲线",
    "previewName": "wind_power_curve.png"
  },
  {
    "id": "wind_rose",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "wind",
      "rose",
      "polar"
    ],
    "description": "风玫瑰图",
    "previewName": "wind_rose.png"
  },
  {
    "id": "solar_irradiance_day",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "solar",
      "irradiance"
    ],
    "description": "典型日辐照度",
    "previewName": "solar_irradiance_day.png"
  },
  {
    "id": "battery_soc_schedule",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "storage",
      "SOC"
    ],
    "description": "储能充放电调度",
    "previewName": "battery_soc_schedule.png"
  },
  {
    "id": "duck_curve",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "netload",
      "solar"
    ],
    "description": "鸭子曲线",
    "previewName": "duck_curve.png"
  },
  {
    "id": "energy_mix_area",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "mix",
      "stacked"
    ],
    "description": "能源结构演化",
    "previewName": "energy_mix_area.png"
  },
  {
    "id": "ev_charging_load",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "EV",
      "load"
    ],
    "description": "电动车充电负荷",
    "previewName": "ev_charging_load.png"
  },
  {
    "id": "ragone_plot",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "storage",
      "ragone"
    ],
    "description": "Ragone 储能对比图",
    "previewName": "ragone_plot.png"
  },
  {
    "id": "hosting_capacity",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "PV",
      "hosting"
    ],
    "description": "光伏承载力箱线",
    "previewName": "hosting_capacity.png"
  },
  {
    "id": "motor_torque_speed",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "motor",
      "torque"
    ],
    "description": "电机转矩-转速特性族",
    "previewName": "motor_torque_speed.png"
  },
  {
    "id": "transformer_efficiency",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "transformer",
      "efficiency"
    ],
    "description": "变压器效率曲线",
    "previewName": "transformer_efficiency.png"
  },
  {
    "id": "pv_iv_temperature",
    "category": "energy",
    "categoryLabel": "能源",
    "group": "工程与电气能源",
    "tags": [
      "PV",
      "IV",
      "temperature"
    ],
    "description": "光伏 I-V 温度特性",
    "previewName": "pv_iv_temperature.png"
  },
  {
    "id": "converter_efficiency_map",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "converter",
      "efficiency"
    ],
    "description": "变流器效率 MAP",
    "previewName": "converter_efficiency_map.png"
  },
  {
    "id": "flowchart_algorithm",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "flowchart",
      "algorithm"
    ],
    "description": "算法流程图",
    "previewName": "flowchart_algorithm.png"
  },
  {
    "id": "flowchart_methodology",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "flowchart",
      "methodology"
    ],
    "description": "研究方法流程图",
    "previewName": "flowchart_methodology.png"
  },
  {
    "id": "block_diagram_control",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "block",
      "control"
    ],
    "description": "闭环控制框图",
    "previewName": "block_diagram_control.png"
  },
  {
    "id": "single_line_diagram",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "electrical",
      "substation"
    ],
    "description": "电气主接线单线图",
    "previewName": "single_line_diagram.png"
  },
  {
    "id": "signal_flow_graph",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "signal_flow",
      "mason"
    ],
    "description": "信号流图",
    "previewName": "signal_flow_graph.png"
  },
  {
    "id": "graph_directed",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "network",
      "directed"
    ],
    "description": "带权重有向图",
    "previewName": "graph_directed.png"
  },
  {
    "id": "graph_undirected",
    "category": "diagram",
    "categoryLabel": "流程图",
    "group": "专题表达",
    "tags": [
      "network",
      "community"
    ],
    "description": "无向图社团",
    "previewName": "graph_undirected.png"
  },
  {
    "id": "scatter_matrix",
    "category": "multivar",
    "categoryLabel": "多变量",
    "group": "AI 与高维分析",
    "tags": [
      "scatter",
      "matrix",
      "pairs"
    ],
    "description": "散点图矩阵",
    "previewName": "scatter_matrix.png"
  },
  {
    "id": "population_pyramid",
    "category": "categorical",
    "categoryLabel": "柱状",
    "group": "通用科研图表",
    "tags": [
      "pyramid",
      "bidirectional"
    ],
    "description": "人口金字塔",
    "previewName": "population_pyramid.png"
  },
  {
    "id": "phasor_diagram",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "phasor",
      "three_phase"
    ],
    "description": "三相电压电流相量图",
    "previewName": "phasor_diagram.png"
  },
  {
    "id": "pq_injection_heatmap",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "injection",
      "heatmap"
    ],
    "description": "节点 PQ 注入热力图",
    "previewName": "pq_injection_heatmap.png"
  },
  {
    "id": "dq_current_locus",
    "category": "electrical",
    "categoryLabel": "电气",
    "group": "工程与电气能源",
    "tags": [
      "dq",
      "locus",
      "motor"
    ],
    "description": "dq 轴电流轨迹",
    "previewName": "dq_current_locus.png"
  },
  {
    "id": "protection_coordination",
    "category": "power",
    "categoryLabel": "电力",
    "group": "工程与电气能源",
    "tags": [
      "protection",
      "coordination"
    ],
    "description": "阶段式保护配合图",
    "previewName": "protection_coordination.png"
  }
]

export const GALLERY_GROUPS = Array.from(new Set(GALLERY_TEMPLATES.map((item) => item.group)))

export const GALLERY_CATEGORIES = Array.from(
  new Map(
    GALLERY_TEMPLATES.map((item) => [
      item.category,
      { id: item.category, label: item.categoryLabel, group: item.group },
    ]),
  ).values(),
)
