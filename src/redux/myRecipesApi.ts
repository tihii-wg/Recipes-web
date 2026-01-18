import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recipe } from "../Types/types";

export const myRecipesApi = createApi({
  reducerPath: "myBooksApi",
  tagTypes: ["mybooks"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getMyRecipes: build.query<Recipe[], void>({
      query: () => "mybooks",
      providesTags: ["mybooks"],
      keepUnusedDataFor: 600,
    }),
    addMyRecipe: build.mutation<Recipe, Recipe>({
      query: (newBook) => ({
        url: "mybooks",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["mybooks"],
    }),
    deleteRecipe: build.mutation<void, string>({
      query: (id) => ({
        url: `mybooks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mybooks"],
    }),
  }),
});

export const {
  useGetMyRecipesQuery,
  useAddMyRecipeMutation,
  useDeleteRecipeMutation,
} = myRecipesApi;
