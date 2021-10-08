import { graphql, PageProps } from "gatsby"
import * as React from "react"
import App from './components/app'

import { ChakraProvider } from "@chakra-ui/react"
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react"
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

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = `Hello`
  public render() {
    const { siteName } = this.props.data.site.siteMetadata
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
			<Button colorScheme="orange">Log in</Button>
		</Box>
		</Flex>
        </ChakraProvider>
    )
  }
}