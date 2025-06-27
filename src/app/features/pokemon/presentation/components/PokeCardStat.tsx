import { cn } from "@/app/shared/utils";

export const PokeCardStat = ({
  name,
  value,
  className,
}: {
  name: string;
  value: number;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm leading-5", className)}>
      {name} {value}
    </p>
  );
};
