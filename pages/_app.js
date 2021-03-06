import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";

//import all fonts and variants
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

import "@fontsource/poppins/400.css"
import "@fontsource/poppins/400-italic.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/600-italic.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/700-italic.css"
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
