import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { SearchForm } from "./SearchForm";

export const NavBar: React.FC = () => {
  return(
    <Flex bg="yellow" marginBottom="5" padding="6">
      <Heading m="auto">
        STAR WARS
      </Heading>
      <Box>
        <SearchForm />
      </Box>
    </Flex>
  )
}