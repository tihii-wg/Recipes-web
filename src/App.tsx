import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyRecipes from "./features/meRecipes/MyRecipes";
import AppLayout from "./ui/AppLayout";
import Home from "./components/Home";
import Recipes from "./features/recipes/Recipes";
import RecipeCard from "./ui/RecipeCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />}></Route>
          <Route path="recipecard/:recipeId" element={<RecipeCard />} />
          <Route path="myrecipes" element={<MyRecipes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
