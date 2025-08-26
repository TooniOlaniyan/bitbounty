function MetricCard({
  icon: Icon,
  title,
  value,
  description,
  trend,
  trendUp,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
  trend?: string;
  trendUp?: boolean;
}) {
  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-grey-500 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div
          className={`text-sm font-semibold ${trendUp ? "text-success" : "text-muted-foreground"}`}
        >
          {trend}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-2">
          {title}
        </p>
        <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
export default MetricCard;
