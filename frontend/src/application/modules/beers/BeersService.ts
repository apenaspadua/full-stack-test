import { useAPI } from 'application/hooks/useSwr';

export function useListBeers<Data = Beer, Error = unknown>(page: number) {
  const path = `/punk-api/beers${`?page=${page}`}`;
  return useAPI<Data, Error>(path);
}
