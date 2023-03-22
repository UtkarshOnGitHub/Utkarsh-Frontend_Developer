import { Box, ButtonGroup, Container, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { Logo } from './Logo'

export const Footer = () => (
  <Box
    w="100%"
    as="footer"
    role="contentinfo"
    padding={"10px"}
    marginTop="40px"
    data-testid="footer-test"
    borderTop={"2px solid grey"}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        {/* <Logo /> */}
        <Box w="60px">
            <Image src="https://cryptologos.cc/logos/aave-aave-logo.png" w="100%"></Image>
        </Box>
        
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/utkarsh-sharma-879799236/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="https://github.com/UtkarshOnGitHub" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; 2023 Antriksh Yatra, Inc. All rights reserved.
      </Text>
    </Stack>
  </Box>
)