export type Recipes = {
  limit: number;
  recipes: Recipe[];
  skip: number;
  total: number;
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
// export type MyRecipes = {
//   recipes: Recipe[];
// };

export type Pagination = {
  limit: number;
  page: number | null;
  skip: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export type RecipeListProps = {
  recipes?: Recipes;
  isSearch?: boolean;
  pagination?: Pagination;
};
export type MyRecipeListProps = {
  recipes: Recipe[];
  isSearch?: boolean;
  pagination?: Pagination;
};

export type SearcProps = {
  inputSearch: string;
  setInputSearch: (value: string) => void;
};

export type RecipeItemProps = {
  recipe?: Recipe;
  id: number | string;
  image: string;
  prepTimeMinutes: number;
  caloriesPerServing: number;
  cuisine: string;
  name: string;
};

export type PaginationProps = {
  recipes?: Recipes;
  pagination?: Pagination;
};
