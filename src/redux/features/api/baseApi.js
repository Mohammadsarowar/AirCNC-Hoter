import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    // For example:
    getPosts: builder.query({
      query: () => '/getRoomsData', // API endpoint URL
    }),
  }),
});

export const { useGetPostsQuery } = baseApi;
export default baseApi;
