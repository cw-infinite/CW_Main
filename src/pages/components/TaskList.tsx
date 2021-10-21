import * as React from "react"
import { ChakraProvider, Text, Flex, Spacer, Box, Container, Checkbox } from "@chakra-ui/react"

const taskObjectList = [
	{
	  "name": "Scentric",
	  "description": "Pyramax",
	  "isDone": "Acrodance",
	  "startDateTime": "Accupharm",
	  "endDateTime": "Octocore"
	},
	{
	  "name": "Honotron",
	  "description": "Entality",
	  "isDone": "Zenthall",
	  "startDateTime": "Perkle",
	  "endDateTime": "Obliq"
	},
	{
	  "name": "Oceanica",
	  "description": "Anacho",
	  "isDone": "Rooforia",
	  "startDateTime": "Wazzu",
	  "endDateTime": "Telequiet"
	}
]

type AppProps = {
	message?: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const TaskList = ({ message }: AppProps) => {

	// const []

	const cards = {
		"display:": "flex",
		"flex-wrap": "wrap",
		"justify-content": "space-between"
	}
	{
		// margin: 20px;
		// padding: 20px;
		// width: 500px;
		// min-height: 200px;
		// display: grid;
		// grid-template-rows: 20px 50px 1fr 50px;
		// border-radius: 10px;
		// box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
		// transition: all 0.2s;
	  }

	return (
		<Container maxWidth="container.lg">
			{taskObjectList.length === 0 ?
			<Box>
				Create your first Task
			</Box>
			:
			taskObjectList.map((task, index) => {
				return (
					<Box key={index}  
						d="flex"
						flexDir="column"
						w="100%" 
						m={5}
						p={5}
						minH="100px"
						shadow="md" 
						borderWidth="1px"
						borderRadius="15px" 
						borderColor="#8fcde4" 
						transition="all 0.2s"
						boxShadow="0px 6px 10px rgba(0, 0, 0, 0.25)"
						_hover={{
							boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)",
							transform: "scale(1.01)"
						}}
						
						>
						<Box
						
						// _after={{
						// 	position: "absolute",
						// 	top: "25px",
						// 	left: 0,
						// 	content:`""`,
						// 	width: "0%",
						// 	height: "3px",
						// 	backgroundColor: "rgba(255, 0, 0, 0.6)",
						// 	transition: "all 0.5s"
						// }}
						width= "0%"
						transition ="all 2s"
						_hover={{
							width: "100%",
							// transition:"all 2s",
							borderBottom: "2px solid white"

						}}
						>
							{/* <Box
							transition= "width 2s"
							 _hover={{
								position: "absolute",
								top: "25px",
								left: 0,
								content:`""`,
								width: "0%",
								height: "3px",
								backgroundColor: "rgba(255, 0, 0, 0.6)",

							}} /> */}

						</Box>
						
						<Checkbox size="lg" colorScheme="orange" > {task.name} </Checkbox>

					</Box>
				)
			})
			 }
			<Box></Box>
		</Container>
	)
}


export default TaskList