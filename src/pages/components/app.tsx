import { ChakraProvider } from "@chakra-ui/react"
import Header from "./header"

type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const MyApp = ({ message }: AppProps) => {


  return (
    <ChakraProvider>
      {/* <Component {...pageProps} /> */}

      <Header message='whats up' />
    </ChakraProvider>
  );
}

export default MyApp