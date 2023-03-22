import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ListCard = ({ data }) => {
  console.log(data);
  return (
    <Container w="100%" p="12" boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px">
      <Wrap spacing="30px" marginTop="5">
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://cdn.mos.cms.futurecdn.net/Yyqi7Z5skc5UnbUXBGrwac.jpg"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={["Engineering", "SpaceX"]} marginTop="3" /> */}
            <Box marginTop="20px" >
                <Box textAlign={"center"}>
                <Text as={"mark"} fontSize="4xl" textAlign={"center"}>
                    {data.serial}
                </Text>
                </Box>
                
                <Text fontSize={"3xl"} marginTop="10px">Type: {data.type}</Text>
                <Text marginTop="10px">Last Update: {data.last_update}</Text>
                <Text marginTop="10px" fontSize={"2xl"}>Water Landing: {data.water_landings}</Text>
                <Text marginTop="10px" >Status:{data.status}</Text>
                
            </Box>
          </Box>
      </Wrap>
    </Container>
  );
};

export default ListCard;
