import { Box, Stack, Flex, Heading, Text, Center, Button } from "@chakra-ui/react";
import React from "react";
import {  usePersonDetails } from "../context/PersonDetailContext";
import { useHistory } from "react-router-dom";

const PersonDetails: React.FC = () => {
  const history = useHistory();
  const {person} = usePersonDetails();
  
  return (
    <>
      <Button onClick={() => history.push("/")}>Back</Button>
      <Center>
        <Box
          maxW={"445px"}
          w={"full"}
          bg="white"
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack>
            <Flex justifyContent="space-between">
              <Heading
                color="gray.700"
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {person?.person?.name}
              </Heading>
            </Flex>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              height: {person?.person?.height}
            </Text>
            <Heading
              color="gray.700"
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {person?.gender}
            </Heading>
            <Text color={"gray.500"}> mass: {person?.person?.mass}</Text>
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
                Home World: {person?.person?.homeworld?.name}
              </Text>
              <Text color={"gray.500"}>Population: {person?.person?.homeworld?.population}</Text>
              <Text color={"gray.500"}>Terrain: {person?.person?.homeworld?.terrain}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  )
}
export default PersonDetails