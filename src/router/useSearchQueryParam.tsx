import { useSearchParams } from "react-router-dom";

export const useSearchQueryParam = (paramName: string): [string, Function] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParam = (param: string) => {
    console.log(searchParams);
    searchParams.delete(paramName);
    console.log(searchParams);
    searchParams.append(paramName, param);
    setSearchParams(searchParams);
  };

  const queryParam = (): string => {
    if (searchParams.get(paramName) === undefined) {
      return "";
    }
    return searchParams.get(paramName) || "";
  };

  return [queryParam(), setQueryParam];
};
