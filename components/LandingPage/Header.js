import React from "react";
import {Box, Button, Flex, Heading, HStack, Image, Show, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {FaArrowDown, FaLayerGroup} from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  const handleScroll = () => {
    if(typeof window !== "undefined") {
      var toekomstvisie = document.querySelector("#toekomstvisie");
      toekomstvisie.scrollIntoView({behavior: "smooth"})
    }
  }


  return (
    <Flex w="full" align="center" pt={{base: 24, md: 36}} pb={{base: 4, md: 8}} px={8} pos="relative"
          flexDir="column"  bgColor="black"
    >
      <HStack align="center" w="full" maxW="container.xl" spacing={16} >
        <Box flexDir="column" w="full" maxW="container.xl">
          <Heading fontWeight={900} fontSize={{base: "3xl", md: "5xl"}} color="white">
            Oplossingsgerichte
            <Box as="span" color="blue.300" textShadow="0px 0px 4px rgba(0,255,0,.6)"> cloud</Box> software
          </Heading>

          <Text color="gray.400" fontSize={{base: "md", md: "xl"}} maxW="container.md">
            Met kennis en ervaring in
            <Box as="span" color="blue.400" fontWeight={700}> web development</Box>,
            <Box as="span" color="blue.400" fontWeight={700}> platformeconomie </Box> en het
            <Box as="span" color="blue.400" fontWeight={700}> onderwijs </Box>
             hét aanspreekpunt voor innovatieve digitale platforms
          </Text>


          <HStack mt={8} w="full" maxW="container.xl">
            <Button size="lg" leftIcon={<FaLayerGroup/>} onClick={() => router.push("/registreren")}
                    colorScheme="blue">Projecten</Button>
            <Button size="lg" rightIcon={<FaArrowDown/>} onClick={handleScroll}>Lees meer</Button>
          </HStack>
        </Box>

        {/*the Show component from ChakraUI is currently resulting in an error in the console*/}
        <Show above="sm">
          <Box pos="relative">
            <Box bottom={4} right={4} pos="absolute">
              <Heading color="gray.50" fontSize="3xl">Wouter Deen</Heading>
              <Text color="gray.300" fontSize="lg" float="right">Eigenaar Unsea</Text>
            </Box>
            <Image src="/Profielfoto.png" maxH="xl" alt="header img" rounded="xl"/>
          </Box>
        </Show>

      </HStack>
    </Flex>
  )
}