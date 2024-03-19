import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../entities/post";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], { page: number }>({
      query: ({ page = 1 }) => ({
        url: "/posts",
        params: {
          _page: page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: builder.query<Post, string | undefined>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
