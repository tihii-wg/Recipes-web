import { Outlet, useNavigate } from "react-router";
import { useSearchRecipeQuery } from "../../redux/recipesApi";
import RecipesList from "./RecipesList";
import Button from "../../ui/Button";
import Search from "../../ui/Search";
import { useState } from "react";
import Loading from "../../ui/Loading";

export default function Recipes() {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  const { data: recipes, isLoading } = useSearchRecipeQuery(inputSearch);

  if (isLoading) return <Loading />;
  return (
    <div className="recipes">
      <Outlet />
      <div className="recipes-buttons_container">
        <div className="recipes-buttons">
          <Button
            handler={() => {
              navigate("/");
            }}
          >
            Back to home
          </Button>
          <Button
            handler={() => {
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
      <RecipesList recipes={recipes?.recipes ?? []} />
    </div>
  );
}
