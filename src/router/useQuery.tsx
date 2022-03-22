import { useMemo } from "react";
import { useLocation } from "react-router";

export const useQuery = () => {
  const { search } = useLocation();
  console.log(search);
  return useMemo(() => new URLSearchParams(search), [search]);
};
