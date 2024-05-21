import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import codeeditor from '../public/images/projects/codeeditor.png'
import githubspace from '../public/images/projects/githubspace.png'
import hash from '../public/images/projects/hash.png'
import iss from '../public/images/projects/iss.png'
import loggerBoilerplate from '../public/images/projects/loggerBoilerplate.png'
import portfolio from '../public/images/projects/portfolio.png'
import radiobox from '../public/images/projects/radiobox.png'
import roland from '../public/images/projects/roland.png'

const Works = () => (
  <Layout title="projects">
    <Container>
      <Heading as="h3" fontSize={20} mt={4} mb={6}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={{md: 6, lg: 10}}>


        <Section>
          <WorkGridItem
            id="portfolio"
            title="Portfolio"
            thumbnail={portfolio}
            path="https://daidesu.dev/"
          >
            This project is a personal portfolio website built with Next.js and Chakra UI. It showcases all my relevant information includes side projects, bio, skills, and interests. It utilizes Next.js for server-rendered and static websites and Chakra UI for simple, modular, and accessible components.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="logger-boilerplate"
            title="Logger Boilerplate"
            thumbnail={loggerBoilerplate}
            path="https://github.com/xuandai-py/logger-boilerplate"
          >
            A simple boilerplate for creating a logger in Node.js.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="radiobox" title="RadioBox" thumbnail={radiobox} path='https://radio-box.vercel.app/'>
            This app combines the features of kanban boards with the added lofi-calm music and natural sound for a calming and focused work environment using youtube api.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="githubspace"
            title="Github space"
            thumbnail={githubspace}
            path="https://githubspace.daidesu.dev/"
          >
            This project utilizes the GitHub API along with swr/chart to fetch and display personal GitHub profiles in a user-friendly format. View starred repositories, projects, activities, monitor and analyze contributions, making it easier to manage and showcase user work.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="code-editor"
            title="Code editor"
            thumbnail={codeeditor}
            path="https://github.com/xuandai-py/code-editor"
          >
            Editor is designed to transform and bundle JavaScript/HTML/CSS - React code into a live view in the browser. Quickly view the results of code changes. Suppose to work on more languages and bundler in future.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="wher-is-the-iss"
            title="Where is the iss"
            thumbnail={iss}
            path="https://whereistheiss.daidesu.dev/"
          >
            Simple tracking the ISS in real time.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="hashgen"
            title="Hash generator"
            thumbnail={hash}
            path="https://hash-generator-new9-9b0lys9ri-xuandai-py.vercel.app/"
          >
            A simple app use bcrypt to hash input and compare.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="roland"
            title="Roland Bridgecast"
            thumbnail={roland}
            path="https://rolandbridgecast.netlify.app/"
          >
            An easy track github profile with basic bio, stars, contributions,
            ...etc
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
