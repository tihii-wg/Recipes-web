import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/myrecipes");
        }}
      >
        My Recipes
      </Button>
      <div className="home-page_content">
        <h1>Home page content...</h1>
      </div>
    </div>
  );
}
