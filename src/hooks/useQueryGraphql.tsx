import type { ExecutionResult } from 'graphql';
import type { TypedDocumentString } from '../graphql/graphql';
import { Env } from '@/libs/Env';
import { useQuery } from '@tanstack/react-query';

export function useQueryGraphQL<TResult, TVariables>(
  enabled: boolean = true,
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return useQuery({
    enabled,
    queryKey: [document, variables],
    queryFn: async ({ queryKey }) => {
      return fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `bearer ${Env.NEXT_PUBLIC_GITHUB_PAT}`,
          'User-Agent': 'Vernando05',
        },
        body: JSON.stringify({
          query: queryKey[0],
          variables: queryKey[1] || {},
        }),
      }).then(response => response.json()) as Promise<ExecutionResult<TResult>>;
    },
  });
}
