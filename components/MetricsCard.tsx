import type { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IMetricsCard {
  icon?: LucideIcon;
  title: string;
  value: string | number;
}

const MetricsCard = ({ icon: Icon, title, value }: IMetricsCard) => {
  return (
    <div className="flex-column rounded-lg border-[1.5px] border-border gap-4 py-2">
      <span className={cn('bg-secondary rounded-full p-2')}>{Icon && <Icon className={cn("w-4 h-4")} />}</span>
      <div className="flex-column">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
};
export default MetricsCard;
