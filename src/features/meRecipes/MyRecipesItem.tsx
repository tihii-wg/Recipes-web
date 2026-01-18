import { useNavigate } from "react-router-dom";
import { useDeleteRecipeMutation } from "../../redux/myRecipesApi";
import type { RecipeItemProps } from "../../Types/types";
import Button from "../../ui/Button";

export default function RecipeItem({
  id,
  image,
  prepTimeMinutes,
  cuisine,
  caloriesPerServing,
  name,
}: RecipeItemProps) {
  const navigate = useNavigate();
  const [deleteBook] = useDeleteRecipeMutation();

  return (
    <li>
      <div className="recipe-item_container">
        <img
          className="recipe-item_image"
          src={image}
          alt="/public/images/recipe-image.png"
        />
        <div className="recipe-item-description_container">
          <div className="recipe-item-description">
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
              handler={() => {
                deleteBook(id.toString());
                alert("Recipe deleted.");
              }}
            >
              Delete recipe
            </Button>
            <Button
              handler={() => {
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
