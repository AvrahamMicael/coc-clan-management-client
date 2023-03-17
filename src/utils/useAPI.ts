import useSWR, { Key } from 'swr';
import useSWRMutation from 'swr/mutation';

type SWRReturnType<T, V> = ReturnType<typeof useSWR<T, V>>;
type SWROptions<T, V> = Parameters<typeof useSWR<T, V>>[2];

type SWRMutationReturnType<T, V, Z> = ReturnType<typeof useSWRMutation<T, V, Key, Z>>;
type SWRMutationOptions<T, V, Z> = Parameters<typeof useSWRMutation<T, V, Key, Z>>[2];

type HTTPMethod = 'GET' | 'POST' | 'PATCH';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as const;

const fetcher = <T, V = unknown>(path: string, method: HTTPMethod = 'GET', body?: V): Promise<T> => fetch(path, {
  method,
  headers,
  mode: 'cors',
  credentials: 'include',
  body: JSON.stringify(body),
})
.then<T>(async res => {
  if(!res.ok)
  {
    const error: Error = await res.json();
    throw error;
  }
  return res.json();
});

function useAPI<T, V extends Error = Error>(path: string, method?: 'GET', options?: SWROptions<T, V>): SWRReturnType<T, V>;
function useAPI<T, V extends Error = Error, Z extends any = any>(path: string, method: 'POST'|'PATCH', options?: SWRMutationOptions<T, V, Z>): SWRMutationReturnType<T, V, Z>;
function useAPI<T, V extends Error = Error, Z = never>(path: string, method: HTTPMethod = 'GET', options: Object = {}) {
  const key: string = process.env.NEXT_PUBLIC_API_URL + path;
  return method == 'GET'
    ? useSWR<T, V, string>(key, url => fetcher<T>(url), { suspense: true, ...options })
    : useSWRMutation<T, Z, string, V>(key, (url, { arg }) => fetcher<T, V>(url, method, arg), options);
}

export default useAPI;
