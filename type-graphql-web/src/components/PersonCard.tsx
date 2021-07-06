import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Button
} from "@chakra-ui/react";
import React from "react";
import {  usePersonDetails } from "../context/PersonDetailContext";
import { useHistory } from "react-router-dom";

export interface HomeworldProps {
  name: string;
  terrain: string;
  population: string;
}
export interface PersonProps {
  name: string;
  gender: string;
  height: string;
  mass: string;
  homeworld: {
    name: string;
    terrain: string;
    population: string;
}
}
export const PersonCard: React.FC<PersonProps> = (props: PersonProps) => {
  const {setPerson} = usePersonDetails()
  const history = useHistory();
  
  return (
    <>
      <Box
        maxW={"445px"}
        w={"full"}
        bg="white"
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        marginBottom="4"
      >
        <Stack>
          <Flex justifyContent="space-between">
            <Heading
              color="gray.700"
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {props.name}
            </Heading>
            <Button onClick={() => {
              setPerson(props)
              history.push("/details")
            }}
            >
              See details
            </Button>
          </Flex>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            height: {props.height}cm
          </Text>
          <Heading
            color="gray.700"
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {props.gender}
          </Heading>
          <Text color={"gray.500"}> mass: {props.mass}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text 
              color={"yellow.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Home World: {props.homeworld.name}
            </Text>
            <Text color={"gray.500"}></Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};