import type { ReactNode } from 'react';
import SkeletonCard from '@/components/SkeletonCard';

type AccordionContentCustomPropsValue = {
  children: ReactNode;
  error: Error | null;
  isLoading: boolean;
  status: unknown;
};

const AccordionContentCustom = ({ children, error, isLoading, status }: AccordionContentCustomPropsValue) => (
  isLoading
    ? (
        <div className="pt-3 px-3 border bg-gray-50 rounded-2xl">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )
    : status === 'error'
      ? <p>{error?.message}</p>
      : children
);

export default AccordionContentCustom;
