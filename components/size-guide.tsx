export function SizeGuide({ sizeChartId }: { sizeChartId: string }) {
  return <details className="size-guide" data-size-chart-id={sizeChartId}>
    <summary>Size guide <span aria-hidden="true">→</span></summary>
    <p>Final garment measurements will be added with product sizing.</p>
  </details>;
}
