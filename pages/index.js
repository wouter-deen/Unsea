import Head from 'next/head'
import NavBar from "@/components/NavBar";
import {Box, Button, Flex, Heading, Text, Image as ChakraImage} from "@chakra-ui/react";
import Header from "@/components/LandingPage/Header";
import Wave from "react-wavify";
import {FaArrowRight} from "react-icons/fa";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Unsea Cloud</title>
        <meta name="description" content="Software solutions of unsean quality"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      <Flex dir="column" w="full" minH="100vh">
        <NavBar public landingpage/>
        <Box justify="center" w="full" bg="gray.50">
          <Header/>
          <Wave fill='#F7FAFC'
                style={{backgroundColor: "#000"}}
                paused={false}
                options={{
                  height: 100,
                  amplitude: 20,
                  speed: 0.15,
                  points: 3,
                }}
          />

          <Box align="center" justify="center" mb={12} id="toekomstvisie">
            <Flex w={{base: "container.xs", md: "container.lg"}} bg="gray.100" rounded="xl" textAlign="left" py={4}>
              <Box px={8} pos="relative">
                <Heading size="lg">Software met een toekomstvisie</Heading>
                <Text mt={2} mb={20} fontSize="lg">Met uitgebreide kennis in de meest toonaangevende web en cloud
                  frameworks bouwt Unsea aan toekomstbestendige apps. Door jaren aan kennis en ervaring in de snel
                  ontwikkelende wereld van cloud platforms, wordt er door Unsea gekozen voor onderliggende technologieën
                  die <b>built-to-last</b> zijn en zichzelf al grootschalig bewezen hebben. En dit alles zonder
                  verouderde technologieën te gebruiken. Unsea bouwt aan de nieuwe generatie van het web.</Text>
                <Button rightIcon={<FaArrowRight/>} colorScheme="blue" onClick={() => router.push("/tech-stacks")}
                        pos="absolute" bottom={4} left={8}>Lees meer</Button>
              </Box>
              <ChakraImage src="/tech-stack.svg" w="sm"/>
            </Flex>
          </Box>

          <Box align="center" justify="center" mb={12}>
            <Flex w={{base: "container.xs", md: "container.lg"}} bg="gray.100" rounded="xl" textAlign="left" py={4}>
              <ChakraImage src="/fullstack.svg" w="xs" pl={4}/>
              <Box px={8} pos="relative">
                <Heading size="lg">Een totaaloplossing</Heading>
                <Text mt={2} mb={20} fontSize="lg">Geen simpele website, maar een compleet cloud platform. Unsea
                  verzorgt zowel de <b>front-end</b> (wat de gebruiker op het scherm ziet) als de <b>back-end</b> (de
                  beveiligde server processen).</Text>
                <Button rightIcon={<FaArrowRight/>} colorScheme="blue" onClick={() => router.push("/tech-stacks")}
                        pos="absolute" bottom={4} right={8}>Lees meer</Button>
              </Box>
            </Flex>
          </Box>

        </Box>
      </Flex>
    </div>
  )
}
