import React from 'react'
import { usePersonQuery } from '../generated/graphql';
import { useHistory } from "react-router-dom";
import { PersonCard } from '../components/PersonCard';
import { Center } from '@chakra-ui/react';

export const QueryResults: React.FC = () => {
  const history = useHistory();
  const query: any = history?.location.state
  const { data } = usePersonQuery({
    variables: {
      person: query?.data 
    }
  })
  
  return (
    <>
      <Center>
        {data?.person.map((selected) => (
          <PersonCard {...selected}/>
        ))}
      </Center>
    </>
  );
}