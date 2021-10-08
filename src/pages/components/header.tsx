import { ChakraProvider } from "@chakra-ui/react"
import { Flex, Spacer, Box } from "@chakra-ui/react"

type AppProps = {
    message: string;
  }; /* use `interface` if exporting so that consumers can extend */
  
  // Easiest way to declare a Function Component; return type is inferred.
const Header = ({ message }: AppProps) => {

  return (
		<Flex>
			<Box p="4" bg="red.400">
			Box 1
			</Box>
			<Spacer />
			<Box p="4" bg="green.400">
			Box 2
			</Box>
		</Flex>
	)
};


export default Header