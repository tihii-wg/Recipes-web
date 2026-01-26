import { useNavigate, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../redux/recipesApi";
import Button from "./Button";
import type { Recipe } from "../types/types";
import Loading from "./Loading";
import {
  useAddMyRecipeMutation,
  useGetMyRecipesQuery,
} from "../redux/myRecipesApi";
import toast from "react-hot-toast";

export default function RecipeCard() {
  const navigate = useNavigate();
  const params = useParams();

  const recipeId = params.recipeId?.toString();

  const { data: myRecipes } = useGetMyRecipesQuery();
  const { data: recipe, isLoading } = useGetRecipeByIdQuery(recipeId);
  const [addRecipe] = useAddMyRecipeMutation();

  if (isLoading || !recipe) return <Loading />;

  const {
    id,
    image,
    cuisine,
    name,
    caloriesPerServing,
    ingredients,
    instructions,
    prepTimeMinutes,
  }: Recipe = recipe;

  let newRecipe = structuredClone(recipe);

  newRecipe.id = id.toString();

  const isAdded = myRecipes?.some((recipe) => recipe.id === newRecipe.id);

  function handleAddMyRecipe() {
    if (!recipe) return;

    addRecipe(newRecipe);
    toast.success("Recipe was added.");
  }

  return (
    <div className="recipe-card">
      <div className="recipe-card_buttons">
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
        {!isAdded && (
          <Button
            disabled={isLoading}
            onClick={() => {
              handleAddMyRecipe();
            }}
          >
            Add to my recipes
          </Button>
        )}
        <Button
          onClick={() => {
            navigate("/myrecipes");
          }}
        >
          My recipes
        </Button>
      </div>
      <div>
        <div className="recipe-card_container">
          <img className="recipe-card_img" src={image} alt="recipe image" />
          <div className="recipe-card_description">
            <h1 className="recipe-card_name">{name}</h1>
            <h2 className="recipe-card_cuisine">Country: {cuisine}</h2>
            <h2 className="recipe-card_caloriesPerServing">
              Calories: {caloriesPerServing} kkal
            </h2>
            <h2 className="recipe-card_prepTimeMinutes">
              Preparation time:{prepTimeMinutes} min
            </h2>
          </div>
          <div className="recipe-card_preparation">
            <div className="recipe-card_ingrediens">
              <h2>Ingredients:</h2>
              <p>{ingredients}</p>
            </div>
            <div className="recipe-card_instructions">
              <h2>Instructions:</h2>
              <p>{instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
