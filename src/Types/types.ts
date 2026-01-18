export type Recipes = {
  limit: number;
  recipes: [];
  skip: number;
};

export type Recipe = {
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  id: number | string;
  image: string;
  ingredients: [];
  instructions: [];
  mealType: [];
  name: string;
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: [];
  userId: number;
};

export type RecipeListProps = {
  recipes: Recipe[];
};

export type SearcProps = {
  inputSearch: string;
  setInputSearch: (value: string) => void;
};
// export type Recipe = {
//   caloriesPerServing: number;
//   cookTimeMinutes: number;
//   cuisine: string;
//   difficulty: string;
//   id: string | string;
//   image: string;
//   ingredients: [];
//   instructions: [];
//   mealType: [];
//   name: string;
//   prepTimeMinutes: number;
//   rating: number;
//   reviewCount: number;
//   servings: number;
//   tags: [];
//   userId: number;
// };

export type RecipeItemProps = {
  id: number | string;
  image: string;
  prepTimeMinutes: number;
  caloriesPerServing: number;
  cuisine: string;
  name: string;
};
