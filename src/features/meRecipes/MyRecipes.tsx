import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import MyRecipesList from "../meRecipes/MyRecipesList";
import { useGetMyRecipesQuery } from "../../redux/myRecipesApi";
import Loading from "../../ui/Loading";

export default function MyBooks() {
  const { data: myRecipes, isLoading } = useGetMyRecipesQuery();
  const navigate = useNavigate();
  console.log(myRecipes);
  if (isLoading) return <Loading />;

  return (
    <div className="my-recipes">
      <div className="my-recipes_buttons_container">
        <div className="my-recipes_buttons">
          <Button
            onClick={() => {
              navigate("/recipes");
            }}
          >
            Recipes
          </Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Home page
          </Button>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
        </div>
        <h1>My recipes...</h1>
      </div>
      <MyRecipesList recipes={myRecipes ?? []} />
    </div>
  );
}
