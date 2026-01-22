import { configureStore } from "@reduxjs/toolkit";
import { recipesApi } from "./recipesApi";
import { myRecipesApi } from "./myRecipesApi";

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    [myRecipesApi.reducerPath]: myRecipesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(recipesApi.middleware)
      .concat(myRecipesApi.middleware),
});
