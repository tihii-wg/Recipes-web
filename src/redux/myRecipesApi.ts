import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recipe } from "../types/types";

export const myRecipesApi = createApi({
  reducerPath: "myRecipesApi",
  tagTypes: ["myrecipes"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getMyRecipes: build.query<Recipe[], void>({
      query: () => "myrecipes",
      providesTags: ["myrecipes"],
      keepUnusedDataFor: 600,
    }),
    addMyRecipe: build.mutation<Recipe, Recipe>({
      query: (newRecipe) => ({
        url: "myrecipes",
        method: "POST",
        body: newRecipe,
      }),
      invalidatesTags: ["myrecipes"],
    }),
    deleteRecipe: build.mutation<void, string>({
      query: (id) => ({
        url: `myrecipes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["myrecipes"],
    }),
  }),
});

export const {
  useGetMyRecipesQuery,
  useAddMyRecipeMutation,
  useDeleteRecipeMutation,
} = myRecipesApi;
