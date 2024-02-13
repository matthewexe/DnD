import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  ClassResponse,
  FeatureResponse,
  ProficiencyByRaceResponse,
  RaceResponse,
  ResourceListResponse,
  SpellResourceListResponse,
  SubclassByIndexResponse,
  TraitsByRaceResponse,
} from '../types/responses';
import {
  ClassRequest,
  FeaturesRequest,
  ProficiencyByRaceRequest,
  RaceIndexRequest,
  RacesRequest,
  SpellCastingForClass,
  SpellsRequest,
  Subclass,
  SubclassRequest,
  TraitsByIndexRequest,
  TraitsRequest,
} from '../types/requests';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://www.dnd5eapi.co/api/'}),
  tagTypes: [
    'ResourceList',
    'Race',
    'Subrace',
    'Trait',
    'Class',
    'SpellForClass',
    'SubClassesAvailable',
    'FeaturesForClass',
    'ProficienciesForClass',
  ],
  endpoints: builder => ({
    //le tengo ordinate x come andranno utilizzate (NON opzionale)
    //RAZZA
    //CLASSE
    //TUTTO IL RESTO

    //Razze-Sottorazze-Tratti_delle_razze
    getRacesByIndex: builder.query<RaceResponse, RacesRequest>({
      query: ({index}) => `races/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Race', id: index}],
    }),

    getSubRacesByIndex: builder.query<SubclassByIndexResponse, SubclassRequest>(
      {
        query: ({index}) => `subraces/${index}`,
        providesTags: (result, error, {index}) => [
          {type: 'Subrace', id: index},
        ],
      },
    ),

    //getProficiencies:LESS?

    getTraitsByIndex: builder.query<TraitsByRaceResponse, TraitsByIndexRequest>(
      {
        query: ({index}) => `races/${index}/traits`,
        providesTags: (result, error, {index}) => [{type: 'Trait', id: index}],
      },
    ),

    //Classi-Multiclassi?-Sottoclassi

    getClassByIndex: builder.query<ClassResponse, ClassRequest>({
      query: ({index}) => `classes/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Class', id: index}],
    }),

    getSpellCastingByIndex: builder.query<
      SpellResourceListResponse,
      SpellCastingForClass
    >({
      query: ({index}) => `classes/${index}/spellcasting`,
      providesTags: (result, error, {index}) => [
        {type: 'SpellForClass', id: index},
      ],
    }),

    //getMulticlassing   --->manca lo mettiamo?

    getSubClassesAvilableByIndex: builder.query<
      SubclassByIndexResponse,
      SubclassRequest
    >({
      query: ({index}) => `classes/${index}/subclasses`,
      providesTags: (result, error, {index}) => [
        {type: 'SubClassesAvailable', id: index},
      ],
    }),

    //manca la response?
    getSpellAvailableByIndex: builder.query<
      SpellResourceListResponse,
      SpellCastingForClass
    >({
      query: ({index}) => `classes/${index}/spells`,
      providesTags: (result, error, {index}) => [
        {type: 'SubClassesAvailable', id: index},
      ],
    }),

    //manca la request->fatta io controllare
    getFeaturesForClassByIndex: builder.query<FeatureResponse, FeaturesRequest>(
      {
        query: ({index}) => `classes/${index}/features`,
        providesTags: (result, error, {index}) => [
          {type: 'FeaturesForClass', id: index},
        ],
      },
    ),

    getProficienciesForClassByIndex: builder.query<
      ProficiencyByRaceResponse,
      ProficiencyByRaceRequest
    >({
      query: ({index}) => `classes/${index}/proficiencies`,
      providesTags: (result, error, {index}) => [
        {type: 'ProficienciesForClass', id: index},
      ],
    }),

    //LIVELLI PER LE CLASSI

    getEndpointResource: builder.query<ResourceListResponse, string>({
      query: str => `/${str}/`,
      providesTags: (result, error, str) => [{type: 'ResourceList', id: str}],
    }),
  }),
});

export const {useGetEndpointResourceQuery, useGetClassByIndexQuery} = api;
