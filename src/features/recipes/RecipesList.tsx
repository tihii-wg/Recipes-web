import type { Recipe, RecipeListProps } from "../../types/types";
import Pagination from "../../ui/Pagination";
import RecipeNotFound from "../../ui/RecipeNotFound";
import RecipeItem from "./RecipeItem";

export default function RecipeList({
  recipes,
  isSearch,
  pagination,
}: RecipeListProps) {
  if (recipes?.recipes.length === 0) return <RecipeNotFound />;

  return (
    <>
      <ul>
        {recipes?.recipes.map((r: Recipe) => (
          <RecipeItem
            recipe={r}
            key={r.id}
            id={r.id}
            image={r.image}
            prepTimeMinutes={r.prepTimeMinutes}
            caloriesPerServing={r.caloriesPerServing}
            cuisine={r.cuisine}
            name={r.name}
          />
        ))}
      </ul>
      {!isSearch && <Pagination recipes={recipes} pagination={pagination} />}
    </>
  );
}
