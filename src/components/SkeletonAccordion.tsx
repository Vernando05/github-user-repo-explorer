import { Skeleton } from '@/components/ui/skeleton';

const SkeletonAccordion = () => (
  <div className="flex py-4 border-b border-(--border)">
    <div className="flex-auto">
      <Skeleton className="h-5 w-40 rounded-xl" />
    </div>
    <div className="flex-auto justify-items-end">
      <Skeleton className="h-5 w-6 rounded-xl" />
    </div>
  </div>
);

export default SkeletonAccordion;
