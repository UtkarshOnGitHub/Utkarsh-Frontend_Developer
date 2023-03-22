import { Box, Container, Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";

const Form = () => {
  return (
    <>
      <Box marginTop={"30px"} p="30px">
        <Heading as="em">Lets Explore! Filter According To Your Choice</Heading>
        <Flex gap={"30px"} marginTop={"20px"}>
          <Select placeholder="Filter By Type">
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </Select>
          <Select placeholder="Filter By Status">
            <option value="active">Active</option>
            <option value="retired">Retierd2</option>
            <option value="destroyed">Destroyed</option>
          </Select>
          <Select placeholder="Sort By Water Landing">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
      </Box>
    </>
  );
};

export default Form;
