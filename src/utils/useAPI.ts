import useSWR from 'swr';

type SWROptions<T, V> = Parameters<typeof useSWR<T, V>>[2];

const fetcher = <T>(path: string): Promise<T> => fetch(path, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
.then<T>(async res => {
  if(!res.ok)
  {
    const error: Error = await res.json();
    throw error;
  }
  return res.json();
});

const useAPI = <T, V extends Error = Error>(path: string = '', options?: SWROptions<T, V>) => useSWR<T, V, string>(process.env.NEXT_PUBLIC_API_URL + path,
  url => fetcher<T>(url),
  options,
);

export default useAPI;
