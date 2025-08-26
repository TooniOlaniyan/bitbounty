import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Timestamp } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTimeRemaining(deadline: string | Timestamp): string {
  const deadlineDate =
    typeof deadline === "string"
      ? new Date(deadline)
      : deadline instanceof Timestamp
        ? deadline.toDate()
        : null;

  if (!deadlineDate || isNaN(deadlineDate.getTime())) {
    return "Invalid deadline";
  }

  return formatDistanceToNow(deadlineDate, { addSuffix: true });
}
