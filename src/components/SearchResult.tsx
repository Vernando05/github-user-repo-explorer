import type { ReactNode } from 'react';

type SearchResultPropsValue = {
  children: ReactNode;
  query: string;
};

const SearchResult = ({ children, query }: SearchResultPropsValue) => (
  <>
    <p>
      Showing users for "
      {query}
      "
    </p>
    {children}
  </>
);

export default SearchResult;
