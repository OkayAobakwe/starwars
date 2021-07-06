import React from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useHistory } from "react-router";

export const SearchForm: React.FC = () => {
 
  const history = useHistory()
  return(
    <Box>
      <Formik
        initialValues={{ person: ""}}
        onSubmit={(values) => {
          
          history.push({
            pathname: "/results",
            state: {data: values?.person}
          })
        }}
      >
        {(props) => (
          <Form>
            <Flex m="auto" flexDirection="row">
              <Input
                size="sm"
                variant="flushed"
                name="person"
                placeholder="Find person"
                onChange={props.handleChange}
                value={props.values.person}
              />
              <Button size="sm" bg="yellow.200" type="submit">Search</Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  )
}