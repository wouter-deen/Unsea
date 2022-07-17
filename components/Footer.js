import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton, Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text, Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import {FaGithub, FaInstagram, FaLinkedin, FaRegCopyright} from "react-icons/fa";
import {useRouter} from "next/router";

const FooterHeading = (props) => (
  <Heading
    as="h4"
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
)

const LinkGrid = (props) => {
  const router = useRouter();
  return (
    <SimpleGrid columns={3} {...props}>
      <Box minW="130px">
        <FooterHeading mb="4">over</FooterHeading>
        <Stack>
          <Link onClick={() => router.push("/pakket/programmeren")}>Projecten</Link>
          <Link  onClick={() => router.push("/pakket/design")}>Over Unsea</Link>
        </Stack>
      </Box>
      <Box minW="130px">
        <FooterHeading mb="4">Contact</FooterHeading>
        <Stack>
          <Link href="mailto:wouter@wouterdeen.nl">Contactpagina</Link>
          <Link href="mailto:wouter@wouterdeen.nl">Email</Link>
          <Link href="tel:+031640679859">Telefoon</Link>
        </Stack>
      </Box>
    </SimpleGrid>
  )
}

const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <Tooltip label="Polywork • Portfolio, projecten, requests..." placement={"top"} hasArrow>
      <IconButton as="a" href="https://www.polywork.com/wouterdeen" target="_blank" aria-label="LinkedIn" icon={<Image src="/polywork.svg" boxSize="20px" alt="Polywork"/>}/>
    </Tooltip>
    <IconButton as="a" href="https://www.linkedin.com/in/wouter-deen/" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />}/>
    <IconButton as="a" href="https://github.com/wouter-deen" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://www.instagram.com/wouterdeen" target="_blank" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
  </ButtonGroup>
)


export default function Footer() {
  return (
    <Flex bg="white" w="full">
      <Box as="footer" role="contentinfo" mx="auto" w="full" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
        <Stack spacing="10" divider={<StackDivider />}>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
            <Box flex="1">
              <Image src="/logo.svg" h={8} alt="Logo"/>
            </Box>
            <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="3" />
          </Stack>
          <Stack
            direction={{ base: 'column-reverse', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text><Icon as={FaRegCopyright} boxSize={4} mb={-.5}/> {new Date().getFullYear()} Unsea Cloud Software • Alle rechten voorbehouden.</Text>
            <SocialMediaLinks/>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}