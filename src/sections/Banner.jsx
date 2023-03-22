import { Box, Link, Heading, Flex, Text, Button, Image } from '@chakra-ui/react';


const Banner = () => {


  return (
    <Box 
      position="relative"
      bgImage="url(http://wallpaperstock.net/purple-planet-stars-landscape_wallpapers_40141_1920x1080.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={6}>
        <Flex justify="space-between" align={"center"}>
            <Text color={"white"} fontSize="2xl" letterSpacing={"2px"}>अंतरिक्ष</Text>
            <Box w="50px">
                <Image src="https://cryptologos.cc/logos/aave-aave-logo.png" w="100%"></Image>
            </Box>
            
        </Flex>

      <Box margin="0 auto" maxW="64rem" py={{ base: '1rem', lg: '8rem' }}>
        <Heading as="h2" fontSize={{ base: '2.25rem', lg: '3rem' }} mb="4" color="#fff">
          Let's Explore SpaceX With Antrikash.
        </Heading>
        <Flex
          justify="start"
          flexDirection={{ base: 'column', lg: 'row' }}
          align-items="center"
          maxWidth="42rem"
          marginX={{ base: 'auto', lg: '0' }}
        >
          <Box
            pr={{ base: 0, lg: 5 }}
            width={{ base: '100%', lg: '100%' }}
            mb={{ base: '1rem', lg: '1rem' }}
            marginTop={"20px"}
          >
            <Text  mb="1.5rem" fontSize={"1xl"} color="#fff">
              New Technology , New Builts , New Structure <Text as={"b"}>Waiting For You To Get </Text>
            </Text>
            <Button
              as={Link}
              bg="#fff"
              color="#000000"
              fontWeight="bold"
              px="2.5rem"
              py="1.5rem"
              width="full"
              border="2px solid #fff"
              rounded="md"
              _hover={{ bg: 'gray.300', textDecoration: 'none' }}
            >
              Explore
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Banner;