import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recipe, Recipes } from "../types/types";

export const recipesApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["recipes"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    // getBooks: build.query<books, void>({
    //   query: () => "recipes",
    //   // providesTags: ["books"],
    // }),
    getRecipeById: build.query<Recipe, number | string | undefined>({
      query: (id) => `recipes/${id}`,
      keepUnusedDataFor: 600,
    }),
    searchRecipe: build.query<Recipes, string>({
      query: (input) => `recipes/search?q=${input}`,
      providesTags: ["recipes"],
    }),
  }),
});

export const { useGetRecipeByIdQuery, useSearchRecipeQuery } = recipesApi;
