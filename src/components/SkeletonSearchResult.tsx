import SkeletonAccordion from '@/components/SkeletonAccordion';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSearchResult = () => (
  <>
    <Skeleton className="h-7 w-60 rounded-xl my-5" />
    {
      Array.from({ length: 5 }, (_, key) => (<SkeletonAccordion key={key} />))
    }
  </>
);

export default SkeletonSearchResult;
