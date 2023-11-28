import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const beersApi = createApi({
  reducerPath: "beersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/" }),
  endpoints: (builder) => ({
    getAllBeers: builder.query({
      query: () => "beers",
    }),
    getBeerById: builder.query({
      query: (id) => `beers/${id}`,
    }),
  }),
});

export const { useGetAllBeersQuery, useGetBeerByIdQuery } = beersApi;
