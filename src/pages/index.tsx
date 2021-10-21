import { graphql, PageProps } from "gatsby"
import * as React from "react"
import App from './components/app'

import { ChakraProvider } from "@chakra-ui/react"
import { Flex, Spacer, Box, Heading, Button,
Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider} from "@chakra-ui/react"
import TaskList from "./components/TaskList"
// import Layout from "../components/layout"
// import Source from "../components/source"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
data: {
	site: {
	siteMetadata: {
		siteName: string
	}
	}
}
}

export const pageQuery = graphql`
query IndexQuery {
	site {
	siteMetadata {
		siteName
	}
	}
}
`

const IndexPage = (props: IndexPageProps) => {
	const { siteName } = props.data.site.siteMetadata
	return (
		<ChakraProvider>
			{/* <Component {...pageProps} /> */}

			<Flex margin="2">
				<Box>
					<Heading size="md">CW Laboratory</Heading>
				</Box>
				<Spacer />
				<Box>
					<Button colorScheme="orange" mr="4">
					Menu
					</Button>
				<Button colorScheme="orange" mr="4">Log in</Button>
			<Menu>
				<MenuButton as={Button} colorScheme="blue">
				Profile
				</MenuButton>
				<MenuList>
				<MenuGroup title="Profile">
					<MenuItem>My Account</MenuItem>
					<MenuItem>Payments </MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title="Help">
					<MenuItem>Docs</MenuItem>
					<MenuItem>FAQ</MenuItem>
				</MenuGroup>
				</MenuList>
			</Menu>
			</Box>
			</Flex>

			<TaskList />
		</ChakraProvider>
	)
}
export default IndexPage