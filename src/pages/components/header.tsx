import { ChakraProvider } from "@chakra-ui/react"

type AppProps = {
    message: string;
  }; /* use `interface` if exporting so that consumers can extend */
  
  // Easiest way to declare a Function Component; return type is inferred.
const Header = ({ message }: AppProps) => <div>{message}</div>;


export default Header