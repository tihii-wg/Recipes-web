import { Outlet, useNavigate } from "react-router";
import { useSearchRecipeQuery } from "../../redux/recipesApi";
import RecipesList from "./RecipesList";
import Button from "../../ui/Button";
import Search from "../../ui/Search";
import { useState } from "react";
import Loading from "../../ui/Loading";
import { useRecipes } from "../../hooks/useRecipes";

export default function Recipes() {
  const [inputSearch, setInputSearch] = useState("");
  const isSearch = inputSearch.trim() !== "";

  const navigate = useNavigate();

  const { limitRecipes, isLoading, pagination } = useRecipes();

  const { data: searchRecipes, isLoading: searchIsLoading } =
    useSearchRecipeQuery(inputSearch);

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
      <RecipesList
        recipes={recipes}
        isSearch={isSearch}
        pagination={pagination}
      />
    </div>
  );
}
