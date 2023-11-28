import { cn } from "@/libs/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("container mx-auto p-4 lg:max-w-screen-lg", className)}>
      {children}
    </div>
  );
}
