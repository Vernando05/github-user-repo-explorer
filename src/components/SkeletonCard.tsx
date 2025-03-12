import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => (
  <Card
    className="mb-4"
  >
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle className="grow-[0.8]">
          <Skeleton className="h-4 w-1/2 rounded-xl" />
        </CardTitle>
        <div className="my-0! grow-[0.2]">
          <Skeleton className="h-4 w-full rounded-xl" />
        </div>
      </div>
      <CardDescription>
        <Skeleton className="h-4 w-full rounded-xl mb-1" />
        <Skeleton className="h-4 w-full rounded-xl mb-1" />
        <Skeleton className="h-4 w-full rounded-xl" />
      </CardDescription>
    </CardHeader>
  </Card>
);

export default SkeletonCard;
