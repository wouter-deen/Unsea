import React, {useState} from 'react'
import {Button, Flex, HStack, Image as ChakraImage, Link} from '@chakra-ui/react'
import {useRouter} from "next/router";
import NextLink from "next/link"

const NavBar = (props) => {
  const router = useRouter();

  const [navbarBg, setNavbarBg] = useState(!props.landingpage);

  const handleLogoClick = () => {
    if (!props.public && location.pathname !== "/dashboard") {
      router.push("/dashboard");
    } else if (props.public && location.pathname !== "/") {
      router.push("/");
    }
  }

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbarBg(true)
    } else {
      setNavbarBg(false)
    }
  }

  if(typeof window !== "undefined" && props.landingpage) {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <Flex
      flexDirection="column"
      w="full"
      align="center"
      borderBottom="solid 1px"
      borderColor={navbarBg && "gray.100"}
      transition="all ease-in-out 200ms"
      position="fixed"
      top="0"
      bg={navbarBg ? "whiteAlpha.800" : "black"}
      zIndex="2"
      backdropFilter="blur(8px)"
    >
      <Flex
        justifyContent="space-between"
        p={4}
        w="full"
      >
        <ChakraImage src={navbarBg ? "logo.svg" : "logo_white.svg"} alt="logo" onClick={() => handleLogoClick()} h="45px"/>
        <HStack spacing={6} align="center">
          <HStack display={{base: "none", md: "inline-block"}} spacing={8} color={navbarBg ? "black" : "white"}
                  transition="all ease-in-out 200ms">
            <NextLink href="/pakket/design">
              <Link fontWeight="semibold">Projecten</Link>
            </NextLink>
            <NextLink href="/pakket/programmeren">
              <Link fontWeight="semibold">Over Unsea</Link>
            </NextLink>
            <NextLink href="/pakket/programmeren">
              <Link fontWeight="semibold">Contact</Link>
            </NextLink>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button size="sm" colorScheme="blue">Log in</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavBar;