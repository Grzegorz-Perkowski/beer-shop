import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const beersApi = createApi({
  reducerPath: "beersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "beers",
    }),
  }),
});

export const { useGetAllProductsQuery } = beersApi;
