import type { Recipe, RecipeListProps } from "../../types/types";
import Pagination from "../../ui/Pagination";
import RecipeNotFound from "../../ui/RecipeNotFound";
import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }: RecipeListProps) {
  if (recipes?.length === 0) return <RecipeNotFound />;

  return (
    <>
      <ul>
        {recipes?.map((r: Recipe) => (
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
      <Pagination />
    </>
  );
}
