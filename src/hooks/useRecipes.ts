import { useGetRecipesQuery } from "../redux/recipesApi";
import { usePagination } from "./usePaginaton";

export function useRecipes() {
  // const { skip,limit } = usePagination();
  const pagination = usePagination();
  const { skip, limit } = pagination;

  const { data: limitRecipes, isLoading } = useGetRecipesQuery({
    skip,
    limit,
  });
  return { limitRecipes, isLoading, pagination };
}
