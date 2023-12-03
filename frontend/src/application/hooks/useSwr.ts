import { Method } from 'axios';
import { globalAxios } from 'core/infra/baseHttp';
import { sessionStore } from 'core/stores/SessionStore';
import useSWR, { SWRConfiguration } from 'swr';

const defaultOptions: SWRConfiguration = {
  revalidateOnFocus: true,
};

export function useAPI<Data = unknown, Error = unknown>(
  path: string,
  method: Method = 'get',
  swrOptions = defaultOptions,
) {
  const data = useSWR<Data, Error>(
    path,
    async (url: string) => {
      const headers: Record<string, string> = {};
      const authToken = await sessionStore.getToken();
      headers['Authorization'] = `Bearer ${authToken}`;
      try {
        const response = await globalAxios.request({method, url, headers});
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        } else {
          const errorMessage = `Erro na chamada à API: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }
      } catch (error: any) {
        const errorMessage = `Erro na chamada à API: ${error.message}`;
        throw new Error(errorMessage);
      }
    },
    swrOptions,
  );

  return {
    ...data,
    refreshData: data.mutate,
  };
}
