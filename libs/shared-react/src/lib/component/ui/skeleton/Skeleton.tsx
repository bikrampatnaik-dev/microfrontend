import { cn } from '@/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-muted',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
