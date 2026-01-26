import { Outlet, useNavigate } from "react-router";
import {
  useGetRecipesQuery,
  useSearchRecipeQuery,
} from "../../redux/recipesApi";
import RecipesList from "./RecipesList";
import Button from "../../ui/Button";
import Search from "../../ui/Search";
import { useState } from "react";
import Loading from "../../ui/Loading";

export default function Recipes() {
  const navigate = useNavigate();
  const limit = 3;
  const page = 2;
  const skip = (page - 1) * limit;
  const [inputSearch, setInputSearch] = useState("");

  const { data: limitRecipes, isLoading } = useGetRecipesQuery({ skip, limit });

  const { data: searchRecipes, isLoading: searchIsLoading } =
    useSearchRecipeQuery(inputSearch);

  const isSearch = inputSearch !== "";

  const recipes = !isSearch ? limitRecipes : searchRecipes;

  if (isLoading || searchIsLoading) return <Loading />;

  return (
    <div className="recipes">
      <Outlet />
      <div className="recipes-buttons_container">
        <div className="recipes-buttons">
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </Button>
          <Button
            onClick={() => {
              navigate("/myrecipes");
            }}
          >
            My recipes
          </Button>
        </div>
        <h1>Recipes...</h1>
        <div className="search">
          <Search inputSearch={inputSearch} setInputSearch={setInputSearch} />
        </div>
      </div>
      <RecipesList recipes={recipes?.recipes ?? []} isSearch={isSearch} />
    </div>
  );
}
