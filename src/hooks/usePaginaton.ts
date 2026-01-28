import { useState } from "react";
import { useSearchParams } from "react-router";



export function usePagination() {
  const [searchParams] = useSearchParams();

  const initialLimit = 10;

  const [limit, setLimit] = useState(initialLimit);
  let page = searchParams.get("page");

  const skip = (page - 1) * limit;

  return { limit, page, skip, setLimit };
}
