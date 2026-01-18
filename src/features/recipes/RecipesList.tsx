import type { Recipe, RecipeListProps } from "../../Types/types";
import BookItem from "./RecipeItem";

export default function RecipeList({ recipes }: RecipeListProps) {
  
  return (
    <ul>
      {recipes?.map((r: Recipe) => (
        <BookItem
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
  );
}
