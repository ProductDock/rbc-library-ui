import { useSearchParams } from "react-router-dom";

export const useQueryParam = (
  topicParam: string,
  searchParam: string
): [string[], string, Function] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParam = (
    topicQueryParams: string[],
    searchQueryParam: string
  ) => {
    searchParams.delete(topicParam);
    searchParams.delete(searchParam);
    topicQueryParams.forEach((param: string) => {
      searchParams.append(topicParam, param);
    });
    if (!(searchQueryParam === "")) {
      searchParams.append(searchParam, searchQueryParam);
    }
    setSearchParams(searchParams);
  };

  const topicQueryParam = (): string[] =>
    Array.from(searchParams.entries())
      .filter((param) => param[0] === topicParam)
      .map((param) => param[1]);

  const searchQueryParam = (): string => {
    if (searchParams.get(searchParam) === undefined) {
      return "";
    }
    return searchParams.get(searchParam) || "";
  };

  return [topicQueryParam(), searchQueryParam(), setQueryParam];
};
