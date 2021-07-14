export default function PercentageFormat({children: percent}) {
  const percentColor = percent >= 0 ? "text-green-600" : "text-red-600";
  const sign = percent > 0 ? '+' : '';
  return <span className={percentColor}>{`${sign}${percent.toFixed(2)}%`}</span>;
}
