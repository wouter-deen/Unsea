import React from "react";
import {Box, Button, Flex, Heading, HStack, Icon, Show, SimpleGrid, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {
  FaArrowDown,
  FaBitcoin,
  FaChartPie,
  FaCoins,
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
  FaLayerGroup,
  FaMoneyBillWave,
  FaMoneyCheck,
  FaWallet
} from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  const GridIcon = ({icon, color}) => (
    <Flex bg="gray.200" rounded="3xl" w="fit-content" boxSize={32} justify="center" align="center">
      <Icon as={icon} color={color} boxSize={24}/>
    </Flex>
  )

  return (
    <Flex w="full" align="center" pt={{base: 16, md: 44}} pb={{base: 4, md: 12}} px={8} pos="relative"
          flexDir="column" bgColor="black"
    >
      <HStack align="center" w="full" maxW="container.xl" spacing={16}>
        <Box flexDir="column" w="full" maxW="container.xl">
          <Heading fontWeight={900} fontSize="5xl" color="white">
            Oplossingsgerichte
            <Box as="span" color="blue.300" textShadow="0px 0px 4px rgba(0,255,0,.6)"> cloud</Box> software
          </Heading>

          <Text color="gray.400" fontSize={{base: "lg", md: "xl"}} maxW="container.md">
            Met essentiële ervaring in
            <Box as="span" color="blue.400" fontWeight={700}> web development</Box>,
            <Box as="span" color="blue.400" fontWeight={700}> cloud platforms </Box> en het
            <Box as="span" color="blue.400" fontWeight={700}> onderwijs </Box>
             hét aanspreekpunt voor innovatieve digitale platforms
          </Text>


          <HStack mt={8} w="full" maxW="container.xl">
            <Button size="lg" leftIcon={<FaLayerGroup/>} onClick={() => router.push("/registreren")}
                    colorScheme="blue">Projecten</Button>
            <Button size="lg" rightIcon={<FaArrowDown/>}>Lees meer</Button>
          </HStack>
        </Box>

        {/*the Show component from ChakraUI is currently resulting in an error in the console*/}
        <Show above="sm">
          <SimpleGrid flexDir="column" w="full" h="full" columns={4} spacing={4}>
            <GridIcon icon={FaChartPie} color="blue.300"/>
            <GridIcon icon={FaHandHoldingUsd} color="blue.400"/>
            <GridIcon icon={FaMoneyCheck} color="blue.300"/>
            <GridIcon icon={FaCoins} color="blue.600"/>
            <GridIcon icon={FaBitcoin} color="blue.500"/>
            <GridIcon icon={FaFileInvoiceDollar} color="blue.400"/>
            <GridIcon icon={FaWallet} color="blue.600"/>
            <GridIcon icon={FaMoneyBillWave} color="blue.500"/>
          </SimpleGrid>
        </Show>

      </HStack>
    </Flex>
  )
}