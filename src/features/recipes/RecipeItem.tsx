import {
  useAddMyRecipeMutation,
  useGetMyRecipesQuery,
} from "../../redux/myRecipesApi";
import type { RecipeItemProps } from "../../types/types";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function RecipeItem({
  id,
  image,
  prepTimeMinutes,
  caloriesPerServing,
  cuisine,
  name,
  recipe,
}: RecipeItemProps) {
  const navigate = useNavigate();
  const [addMyRecipe, { isLoading }] = useAddMyRecipeMutation();
  const { data: myRecipes } = useGetMyRecipesQuery();

  function handleAddMyRecipe() {
    if (!recipe || !myRecipes) return;

    let newRecipe = structuredClone(recipe);
    newRecipe.id = id.toString();

    if (myRecipes.some((recipe) => recipe.id === newRecipe.id))
      return toast("Recipe already added");

    addMyRecipe(newRecipe);
    toast.success("Recipe was added.");
  }

  return (
    <li>
      <div className="recipe-item_container">
        <img
          className="recipe-item_image"
          src={image}
          alt="/public/images/recipe-image.png"
        />
        <div className="recipe-item-description_container">
          <div
            className="recipe-item-description"
            onClick={() => {
              navigate(`/recipecard/${id}`);
            }}
          >
            <div>
              <div className="recipe-item_title">
                <span>{name}</span>
              </div>
              <div className="recipe-item_author">
                <span>Preparation : {prepTimeMinutes} min</span>
              </div>
              <div>
                <span>Calories : {caloriesPerServing}</span>
              </div>
            </div>
            <div>
              <span className="recipe-item_language">{cuisine}</span>
            </div>
          </div>
          <div className="recipe-item_buttons">
            <Button
              disabled={isLoading}
              onClick={() => {
                handleAddMyRecipe();
              }}
            >
              Add to my cart
            </Button>
            <Button
              onClick={() => {
                navigate(`/recipecard/${id}`);
              }}
            >
              Wiew details
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
