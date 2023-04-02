import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'
import Footer from '../footer'
import styled from '@emotion/styled'

const MainBox = styled.div`
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey; 
  border-radius: 100px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(180deg, #1DB954 0%, #1DB954 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}
`

const Main = ({ children, router }) => {
    return (
        <Box as="main" >
            <Head>
                <meta name="viewpoint" content="width=device-width, initial-scale=1"></meta>
                <title>Hermit Crab - Homepage</title>
                <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg" />
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="Container.md" pt={14} pb={4}>
                <NoSsr>
                    {/* <VoxelDog /> */}
                </NoSsr>
                <MainBox>
                    {children}
                </MainBox>
                <Footer />
            </Container>
        </Box>
    )
}

export default Main