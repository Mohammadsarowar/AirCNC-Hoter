import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aircnc-server-29w4y484l-mdsarowarhang-gmailcom.vercel.app",
  }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    // For example:
    getPosts: builder.query({
      query: () => "/getRoomsData", // API endpoint URL
    }),
    setPost: builder.mutation({
      // Use builder.mutation
      query: ({ email, data }) => ({
        url: `/users/${email}`,
        method: "PUT",
        body: { data: data },
      }),
    }),
  }),
});

export const { useGetPostsQuery, useSetPostMutation } = baseApi;
export default baseApi;
