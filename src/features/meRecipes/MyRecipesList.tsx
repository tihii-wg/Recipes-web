import type { Recipe, RecipeListProps } from "../../Types/types";
import MyRecipeItem from "./MyRecipesItem";

export default function BookList({ recipes }: RecipeListProps) {
  return (
    <ul>
      {recipes?.map((r: Recipe) => (
        <MyRecipeItem
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
