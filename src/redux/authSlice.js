import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `/users/current`,
      providesTags: ['User'],
    }),
    signUp: builder.mutation({
      query: value => ({
        url: `/users/signup`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['User'],
    }),
    logIn: builder.mutation({
      query: value => ({
        url: `/users/login`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['User'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/users/signup`,
        method: 'POST',
        body: { name: null, email: null },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
} = authApi;
