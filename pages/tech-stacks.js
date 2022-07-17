import Head from 'next/head'
import NavBar from "@/components/NavBar";
import {Box, Flex, Heading, Text} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unsea Cloud</title>
        <meta name="description" content="Software solutions of unsean quality" />
        <link rel="icon" href="/favicon.png"/>
      </Head>

      <Flex dir="column" w="full" minH="100vh">
        <NavBar public landingpage/>
        <Box justify="center" w="full" bg="gray.50">

          <Box align="center" justify="center">
            <Flex w={{base: "container.xs", md: "container.md"}} bg="gray.200" rounded="lg" px={8} py={4} textAlign="left">
              <Box>
                <Heading size="lg">Jouw partner voor innovatieve cloud apps</Heading>
                <Text mt={2}>Voor zowel opgeleverde als lopende projecten gebruikt Unsea een <i>tech stack</i> (combinatie van technologieën) die vergelijkbaar is met bedrijven als Netflix en Facebook. Dit zijn innovatieve technologieën als React, server-side rendering (SSR) in combinatie met client-side rendering, JavaScript backends en noSQL databases. Voor verreweg de meeste web applicaties werken deze technologieën sneller dan het oudere php, SQL databases etc.</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}
