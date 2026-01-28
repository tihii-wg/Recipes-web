import type {
  MyRecipeListProps,
  Recipe,
} from "../../types/types";
import MyRecipeItem from "./MyRecipesItem";

export default function BookList({ recipes }: MyRecipeListProps) {
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
