import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  AbilityScore as AbilityScoreResponse,
  Alignment as AlignmentResponse,
  Background as BackgroundResponse,
  Class as ClassResponse,
  ProficiencyReference as EquipmentResponse,
  Feature as FeatureResponse,
  Language as LanguageResponse,
  Race as RaceResponse,
  ResourceList,
  Skill as SkillResponse,
  Subclass as SubclassResponse,
  Trait as TraitResponse,
  Weapon as WeaponResponse,
} from '../types/responses';

import {
  ClassRequest,
  SpellCastingForClassRequest,
  SubclassRequest,
  TraitsByIndexRequest,
  AbilityScoreRequestByIndex,
  AlignamentRequestByIndex,
  BackgroundRequestByIndex,
  LanguageRequestByIndex,
  SkillRequestByIndex,
  EquipmentItemRequestByIndex,
  WeaponPropertyRequestByIndex,
  MonstersRequestByIndex,
  ClassLevelSpellRequest,
  ClassLevelAllResourceRequest,
  ClassLevelResourceRequest,
  MonstersRequestByLevel,
  FeaturesRequestByIndex,
  RacesRequestByIndex,
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
    'LevelResources',
    'LevelFeatures',
    'AbilitiesScore',
    'Alignaments',
    'Background',
    'Languages',
    'Skills',
    'EquipmentItem',
    'WeaponProperties',
    'Monsters',
  ],
  endpoints: builder => ({
    //le tengo ordinate x come andranno utilizzate (NON opzionale)
    //RAZZA
    //CLASSE
    //TUTTO IL RESTO

    //Razze--Tratti_delle_razze
    getRacesByIndex: builder.query<RaceResponse, RacesRequestByIndex>({
      query: ({index}) => `races/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Race', id: index}],
    }),

    getSubRacesByIndex: builder.query<SubclassResponse, SubclassRequest>({
      query: ({index}) => `subraces/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Subrace', id: index}],
    }),

    //getProficiencies:LESS?

    getTraitByIndex: builder.query<TraitResponse, TraitsByIndexRequest>({
      query: ({index}) => `races/${index}/Trait`,
      providesTags: (result, error, {index}) => [{type: 'Trait', id: index}],
    }),

    //Classi-Multiclassi?-Sottoclassi

    getClassByIndex: builder.query<ClassResponse, ClassRequest>({
      query: ({index}) => `classes/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Class', id: index}],
    }),

    getSpellCastingByIndex: builder.query<
      ResourceList,
      SpellCastingForClassRequest
    >({
      query: ({index}) => `classes/${index}/spellcasting`,
      providesTags: (result, error, {index}) => [
        {type: 'SpellForClass', id: index},
      ],
    }),

    //getMulticlassing   --->manca lo mettiamo?

    getSubClassesAvilableByIndex: builder.query<
      SubclassResponse,
      SubclassRequest
    >({
      query: ({index}) => `classes/${index}/subclasses`,
      providesTags: (result, error, {index}) => [
        {type: 'SubClassesAvailable', id: index},
      ],
    }),

    //manca la response?
    getSpellAvailableByIndex: builder.query<
      ResourceList,
      SpellCastingForClassRequest
    >({
      query: ({index}) => `classes/${index}/spells`,
      providesTags: (result, error, {index}) => [
        {type: 'SubClassesAvailable', id: index},
      ],
    }),

    //manca la request->fatta io controllare
    getFeaturesForClassByIndex: builder.query<
      FeatureResponse,
      FeaturesRequestByIndex
    >({
      query: ({index}) => `classes/${index}/features`,
      providesTags: (result, error, {index}) => [
        {type: 'FeaturesForClass', id: index},
      ],
    }),

    // Questa se vuoi la facciamo insieme perchè ti devo far vedere una roba
    getProficienciesForClassByIndex: builder.query<ResourceList, ClassRequest>({
      query: ({index}) => `classes/${index}/proficiencies`,
      providesTags: (result, error, {index}) => [
        {type: 'ProficienciesForClass', id: index},
      ],
    }),

    //LIVELLI PER LE CLASSI
    getAllLevelResourcesByIndex: builder.query<
      ClassLevelResourceRequest,
      ClassLevelAllResourceRequest
    >({
      query: ({index}) => `classes/${index}/levels`,
      providesTags: (result, error, {index}) => [
        {type: 'LevelResources', id: index},
      ],
    }),
    //Check, ho mantenuto lo stesso tipo della richiesta qui sopra, credo vada bene
    getLevelResourcesByIndexByLevel: builder.query<
      ClassLevelResourceRequest,
      ClassLevelResourceRequest
    >({
      query: ({index, class_level}) => `classes/${index}/levels/${class_level}`,
      providesTags: (result, error, {index}) => [
        {type: 'LevelResources', id: index},
      ],
    }),

    //credo sia sbagliata, non trovo la response adeguata
    getFeaturesByIndexByLevel: builder.query<
      FeatureResponse,
      ClassLevelResourceRequest
    >({
      query: ({index, class_level}) =>
        `classes/${index}/levels/${class_level}/features`,
      providesTags: (result, error, {index}) => [
        {type: 'LevelFeatures', id: index},
      ],
    }),

    //NON RIESCO, manca Response?

    getSpellsByClassIndexBySpellLevel: builder.query<
      ClassLevelSpellRequest,
      ClassLevelSpellRequest
    >({
      query: ({index, spell_level}) =>
        `classes/${index}/levels/${spell_level}/spells`,
      providesTags: (result, error, {index}) => [
        {type: 'LevelResources', id: index},
      ],
    }),

    //CHARACTER DATA
    getAbilitiesScoreByIndex: builder.query<
      AbilityScoreResponse,
      AbilityScoreRequestByIndex
    >({
      query: ({index}) => `ability-scores/${index}`,
      providesTags: (result, error, {index}) => [
        {type: 'AbilitiesScore', id: index},
      ],
    }),

    getAlignmentByIndex: builder.query<
      AlignmentResponse,
      AlignamentRequestByIndex
    >({
      query: ({index}) => `alignments/${index}`,
      providesTags: (result, error, {index}) => [
        {type: 'Alignaments', id: index},
      ],
    }),

    getBackgroundByIndex: builder.query<
      BackgroundResponse,
      BackgroundRequestByIndex
    >({
      query: ({index}) => `backgrounds/${index}`,
      providesTags: (result, error, {index}) => [
        {type: 'Background', id: index},
      ],
    }),

    getLanguageByIndex: builder.query<LanguageResponse, LanguageRequestByIndex>(
      {
        query: ({index}) => `languages/${index}`,
        providesTags: (result, error, {index}) => [
          {type: 'Languages', id: index},
        ],
      },
    ),

    //proficiency skip x il momento

    getSkillByIndex: builder.query<SkillResponse, SkillRequestByIndex>({
      query: ({index}) => `skills/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Skills', id: index}],
    }),

    //Game Mechnics--------------------> Forse non servono x fare la scheda??

    // getConditionByIndex:   manca la response

    //getMagicSchoolByIndex: manca la response

    //EQUIPMENT
    getEquipmentByIndex: builder.query<
      EquipmentResponse,
      EquipmentItemRequestByIndex
    >({
      query: ({index}) => `equipment/${index}`,
      providesTags: (result, error, {index}) => [
        {type: 'EquipmentItem', id: index},
      ],
    }),

    //manca la request
    //getEquipmentCategoryByIndex:

    //manca la request
    //getMagicItemByIndex:

    getWeaponPropertyByIndex: builder.query<
      WeaponResponse,
      WeaponPropertyRequestByIndex
    >({
      query: ({index}) => `weapon-properties/${index}`,
      providesTags: (result, error, {index}) => [
        {type: 'WeaponProperties', id: index},
      ],
    }),

    //MONSTERS
    getMonsterByIndex: builder.query<ResourceList, MonstersRequestByIndex>({
      query: ({index}) => `monsters/${index}`,
      providesTags: (result, error, {index}) => [{type: 'Monsters', id: index}],
    }),

    //non sono sicuro
    getMonsterByLevel: builder.query<ResourceList, MonstersRequestByLevel>({
      query: ({challenge_rating}) => `monsters/${challenge_rating}`,
      providesTags: (result, error, {index}) => [{type: 'Monsters', id: index}],
    }),

    getEndpointResource: builder.query<ResourceList, string>({
      query: str => `/${str}/`,
      providesTags: (result, error, str) => [{type: 'ResourceList', id: str}],
    }),
  }),
});

export const {
  useGetRacesByIndexQuery,
  useGetSubRacesByIndexQuery,
  useGetTraitByIndexQuery,
  useGetClassByIndexQuery,
  useGetSpellCastingByIndexQuery,
  useGetSubClassesAvilableByIndexQuery,
  useGetSpellAvailableByIndexQuery,
  useGetFeaturesForClassByIndexQuery,
  useGetProficienciesForClassByIndexQuery,
  useGetAllLevelResourcesByIndexQuery,
  useGetLevelResourcesByIndexByLevelQuery,
  useGetFeaturesByIndexByLevelQuery,
  useGetAbilitiesScoreByIndexQuery,
  useGetAlignmentByIndexQuery,
  useGetBackgroundByIndexQuery,
  useGetLanguageByIndexQuery,
  useGetSkillByIndexQuery,
  useGetEquipmentByIndexQuery,
  useGetWeaponPropertyByIndexQuery,
  useGetMonsterByIndexQuery,
  useGetMonsterByLevelQuery,
  useGetEndpointResourceQuery,
} = api;
