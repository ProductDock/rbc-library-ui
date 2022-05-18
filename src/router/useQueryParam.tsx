import { useSearchParams } from "react-router-dom";

export const useQueryParam = (paramName: string): [string[], Function] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParam = (params: string[]) => {
    searchParams.delete(paramName);
    params.forEach((param: string) => {
      searchParams.append(paramName, param);
    });
    setSearchParams(searchParams);
  };

  const queryParam = (): string[] =>
    Array.from(searchParams.entries())
      .filter((param) => param[0] === paramName)
      .map((param) => param[1]);

  return [queryParam(), setQueryParam];
};
