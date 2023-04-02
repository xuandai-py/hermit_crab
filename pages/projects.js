import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import githubspace from '../public/images/projects/githubspace.png'
import hash from '../public/images/projects/hash.png'
import radiobox from '../public/images/projects/radiobox.png'
import roland from '../public/images/projects/roland.png'

const Works = () => (
  <Layout title="projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="radiobox" title="RadioBox" thumbnail={radiobox} path='https://radio-9od2ikeks-xuandai-py.vercel.app/'>
            A remake simple app that helps you to focus on studying-working, built in some easy soundtracks and lofi tracks style from youtube. Also feat with DND feature like Trello helps working more effecient.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="githubspace"
            title="Github space"
            thumbnail={githubspace}
            path='https://githubspace-cmfsecd6d-xuandai-py.vercel.app'
          >
            An easy track github profile with basic bio, stars, contributions, ...etc
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="hashgen" title="Hash generator" thumbnail={hash} path='https://hash-generator-new9-9b0lys9ri-xuandai-py.vercel.app/'>
            A simple app use bcrypt to hash input and compare.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="roland"
            title="Roland Bridgecast"
            thumbnail={roland}
            path='https://rolandbridgecast.netlify.app/'
          >
            An easy track github profile with basic bio, stars, contributions, ...etc
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works