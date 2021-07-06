import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Person = {
  __typename?: 'Person';
  name: Scalars['String'];
  height: Scalars['String'];
  mass: Scalars['String'];
  gender: Scalars['String'];
  homeworld: Planet;
};

export type Planet = {
  __typename?: 'Planet';
  name: Scalars['String'];
  terrain: Scalars['String'];
  population: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  people: Array<Person>;
  person: Array<Person>;
  planet: Planet;
};


export type QueryPeopleArgs = {
  pageNumber: Scalars['Float'];
};


export type QueryPersonArgs = {
  person: Scalars['String'];
};


export type QueryPlanetArgs = {
  homeworld: Scalars['String'];
};

export type PeopleQueryVariables = Exact<{
  pageNumber: Scalars['Float'];
}>;


export type PeopleQuery = (
  { __typename?: 'Query' }
  & { people: Array<(
    { __typename?: 'Person' }
    & Pick<Person, 'name' | 'height' | 'mass' | 'gender'>
    & { homeworld: (
      { __typename?: 'Planet' }
      & Pick<Planet, 'name' | 'terrain' | 'population'>
    ) }
  )> }
);

export type PersonQueryVariables = Exact<{
  person: Scalars['String'];
}>;


export type PersonQuery = (
  { __typename?: 'Query' }
  & { person: Array<(
    { __typename?: 'Person' }
    & Pick<Person, 'name' | 'height' | 'mass' | 'gender'>
    & { homeworld: (
      { __typename?: 'Planet' }
      & Pick<Planet, 'name' | 'terrain' | 'population'>
    ) }
  )> }
);


export const PeopleDocument = gql`
    query People($pageNumber: Float!) {
  people(pageNumber: $pageNumber) {
    name
    height
    mass
    gender
    homeworld {
      name
      terrain
      population
    }
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *      pageNumber: // value for 'pageNumber'
 *   },
 * });
 */
export function usePeopleQuery(baseOptions: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const PersonDocument = gql`
    query Person($person: String!) {
  person(person: $person) {
    name
    height
    mass
    gender
    homeworld {
      name
      terrain
      population
    }
  }
}
    `;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      person: // value for 'person'
 *   },
 * });
 */
export function usePersonQuery(baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
      }
export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
        }
export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;