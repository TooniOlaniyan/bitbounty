export function ActivityItem({
  icon: Icon,
  title,
  company,
  date,
  status,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  company: string;
  date: string;
  status: "pending" | "completed" | "failed";
}) {
  const statusConfig = {
    pending: {
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/20",
      buttoncolor: "text-error",
      buttonBg: "bg-error/20",
    },
    completed: {
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/20",
      buttoncolor: "text-success",
      buttonBg: "text-success/50",
    },
    failed: {
      color: "text-error",
      bg: "bg-error/10",
      border: "border-error/20",
      buttoncolor: "text-error",
      buttonBg: "text-error/50",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`flex items-center justify-between space-x-4 p-4 rounded-xl ${config.bg} ${config.border} border`}
    >
      <div
        className={`w-10 h-10 ${config.bg} rounded-lg flex items-center justify-center`}
      >
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-foreground truncate">
          {title}
        </p>
        <p className="text-sm text-muted-foreground">
          {company} • {date}
        </p>
      </div>
      <p
        className={`capitalize text-xs font-semibold text-foreground truncate ${config.buttonBg} rounded-2xl py-1 px-3   ${config.buttoncolor} ${config.border}`}
      >
        {status}
      </p>
    </div>
  );
}
