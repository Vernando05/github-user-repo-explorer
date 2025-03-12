import type { ReactNode } from 'react';
import SkeletonSearchResult from '@/components/SkeletonSearchResult';

type SearchResultContainerPropsValue = {
  children: ReactNode;
  data: any;
  error: Error | null;
  isFetched: boolean;
  isLoading: boolean;
  status: unknown;
};

const SearchResultContainer = ({ children, data, error, isFetched, isLoading, status }: SearchResultContainerPropsValue) => (
  isLoading
    ? <SkeletonSearchResult />
    : status === 'error'
      ? <p>{error?.message}</p>
      : isFetched
        ? (
            <div>
              {
                data?.length
                  ? children
                  : <p>No results</p>
              }
            </div>
          )
        : null
);

export default SearchResultContainer;
