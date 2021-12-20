import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
import { Insurance } from '../types/insurance';

export const insuranceApi = createApi({
  reducerPath: 'insuranceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.fwd.co.th/api/dev-ecommerce/',
    prepareHeaders: (headers, { type }) => {
      headers.set('Postman-Token', '7454ba0a-cbf4-4282-aee6-56e6125718b2');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<Insurance, Insurance>({
      query: (payload) => ({
        url: `getProduct`,
        method: 'POST',
        body: payload,
        headers: { 'Postman-Token': '7454ba0a-cbf4-4282-aee6-56e6125718b2' },
      }),
      //transformResponse: (response: { data: Insurance }, meta, arg) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery } = insuranceApi;
