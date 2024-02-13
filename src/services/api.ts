import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ClassResponse, ResourceListResponse} from '../types/responses';
import {ClassRequest} from '../types/requests';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://www.dnd5eapi.co/api/'}),
  tagTypes: ['ResourceList', 'Class'],
  endpoints: builder => ({
    getEndpointResource: builder.query<ResourceListResponse, string>({
      query: str => `/${str}/`,
      providesTags: (result, error, str) => [{type: 'ResourceList', id: str}],
    }),
    getClassByIndex: builder.query<ClassResponse, ClassRequest>({
      query: ({index}) => `classes/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Class', id: index}],
    }),
  }),
});

export const {useGetEndpointResourceQuery, useGetClassByIndexQuery} = api;
