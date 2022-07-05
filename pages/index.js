import Head from 'next/head'
import NavBar from "@/components/NavBar";
import {Box, Flex} from "@chakra-ui/react";
import Header from "@/components/LandingPage/Header";
import Wave from "react-wavify";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unsea Cloud</title>
        <meta name="description" content="Software solutions of unsean quality" />
        <link rel="icon" href="/logo_no_text.svg" />
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

          <Box align="center" justify="center">
            <Box w={{base: "container.xs", md: "container.md"}} bg="blackAlpha.50" rounded="xl">
              Test<br/><br/><br/>Test<br/><br/><br/>YeetTest<br/><br/><br/>YeetTest<br/><br/><br/>Test<br/><br/><br/>YeetTest<br/><br/><br/>YeetTest<br/><br/><br/>Test<br/><br/><br/>YeetTest<br/><br/><br/>YeetTest<br/><br/><br/>Test<br/><br/><br/>YeetTest<br/><br/><br/>Yeet
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}
