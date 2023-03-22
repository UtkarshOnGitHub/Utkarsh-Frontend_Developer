import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

const ShowData = ({ asset }) => {
  if (asset?.length == 0) {
    return (
      <Box textAlign={"center"}>
        <Text fontSize={"4xl"} as="em" color={"grey"}>
          "No data"
        </Text>
      </Box>
    );
  }

  return (
    <>
    <Box textAlign={"center"} marginTop="60px" marginBottom="70px">
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        color="grey"
      >
        The Data We Have{" "}
        <Text as={"span"} color={"orange.400"}>
          Found For You
        </Text>
      </Heading>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} gap="40px" p={"20px"}>
        {asset?.map((e) => {
          return <ListCard key={e.id} data={e} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default ShowData;
