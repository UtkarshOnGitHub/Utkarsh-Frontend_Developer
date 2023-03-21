import { Box, Link, Heading, Flex, Text, Button, Image } from '@chakra-ui/react';

import image from  "../assets/assetImage.jpg"

const Banner = () => {
  return (
    <Box
      position="relative"
      bgImage="url(http://wallpaperstock.net/purple-planet-stars-landscape_wallpapers_40141_1920x1080.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={6}>
        {/* <Box>
            <Image src={"https://cryptologos.cc/logos/aave-aave-logo.png"} w="3%"></Image>
        </Box> */}

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
              Find places to stay and things to do zdlknvslv Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat facere expedita?
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