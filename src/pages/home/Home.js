import { Flex, Box, Text } from 'components/core/Core'

import './Home.css'

const Home = () => {

    return (
        <div className="container">
            <Box w="100%"
                 h="100vh"
                 className="p1" >
                <Flex justify="center"
                      align="center">
                    <Text text="Hey, hello friend."
                          color="#2ecc71"
                          size="2em"
                          family="sans-serif"
                          weight="700"
                          shadow="2px 2px 1px #9b59b6" />
                </Flex>
            </Box>
        </div>
    );
}

export default Home;