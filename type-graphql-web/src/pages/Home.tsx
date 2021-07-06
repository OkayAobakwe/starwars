import { Flex, Button, Center, Spinner } from "@chakra-ui/react";
import React, {useState } from "react";
import { usePeopleQuery } from "../generated/graphql";
import { PersonCard } from "../components/PersonCard";

export const Home: React.FC = () => {
  const [number, setNumber] = useState(1)
  const { loading, data } = usePeopleQuery({
    variables: {
      pageNumber: number
    }
  })
  
  return(
    <>
      {loading ? 
        <Center>
          <Spinner />
        </Center> 
        :
      <>
        <Flex direction="row" wrap="wrap" justifyContent="space-around">
          {data?.people.map((person) => (
            <PersonCard key={person.name} {...person}/>
          ))}
        </Flex>
        <Center marginBottom="5">
          <Button 
            onClick={() => setNumber(number-1)} 
            disabled={number === 1}
          >
              Previous {number - 1}
          </Button>
          <Button 
            onClick={() => setNumber(number+1)}
            disabled={number === 9}
          >
            Next {number}
          </Button>
        </Center>
        </>
      }
    </>
  )
}
