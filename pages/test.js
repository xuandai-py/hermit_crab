import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import githubspace from '../public/images/projects/githubspace.png'
import radiobox from '../public/images/projects/radiobox.png'
import hash from '../public/images/projects/hash.png'
import roland from '../public/images/projects/roland.png'

const test = () => {
  return (
    <Layout title='tet'>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <Section>
          <WorkGridItem id="radiobox" title="RadioBox" thumbnail={radiobox} path='https://radio-9od2ikeks-xuandai-py.vercel.app/'>
            {/* <Text> */}
            A remake simple app that helps you to focus on studying-working, built in some easy soundtracks and lofi tracks style from youtube. Also feat with DND feature like Trello helps working more effecient.
            {/* </Text> */}
          </WorkGridItem>
        </Section>
      </Container>
    </Layout>
  )
}

export default test