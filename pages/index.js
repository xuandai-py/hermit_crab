import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box, Button, Container, Flex, Heading, Icon, Image, Link, List,
  ListItem, SimpleGrid, Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoLogoFacebook, IoLogoGithub, IoLogoGoogle,
  IoPhonePortrait
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import githubspace from '../public/images/projects/githubspace.png'
import radiobox from '../public/images/projects/radiobox.png'


const techStacks = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'SQL/NoSQL',
  'Strapi',
  'NextJs',
  'ChakraUI'
]
const Home = () => (
  <Layout>
    <Container py={2}>
      <Flex direction={'column'} align={'center'} >
        <Box position={'relative'}>
          <Image boxSize={8} alt='hermit logo' position={'absolute'} bottom={3} right={8} src={`https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg`} borderRadius={'100%'} border={'3px solid #000'} />
          <Image boxSize={56} alt='hermit avatar' src='https://avatars.githubusercontent.com/u/66566048?v=4' borderRadius={'100%'} border={'8px solid #1DB954'} />
        </Box>

        <Box my={2} >
          <Heading as="h2" size={'lg'} variant="page-title" color='cyan' bgColor='rgba(157, 236, 249, 0.16)' p={3} borderRadius='lg'>
            Bui Nguyen Xuan Dai
          </Heading>
          <Text fontSize='xl' color='#ccd6f6' fontWeight={600}>Web developer (React / Nodejs)</Text>
        </Box>

      </Flex>

      <Section delay={0.2} >
        <Box id='about'>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Box my={4}>
            <BioSection>
              <BioYear>2000</BioYear>
              Born in Khanh Hoa, Vietnam.
            </BioSection>
            <BioSection>
              <BioYear>2020</BioYear>
              Worked at PKH AJSC as an intership role (Java, Spring).
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              Graduated from the FPT Polytechnic College in application development.
            </BioSection>
          </Box>
          <Flex direction='column' >
            <Heading fontSize='md' mb={2}>Here are a few tech stacks I&#39;ve been working with recently:</Heading>
            <SimpleGrid columns={2} spacing={2} px={5}>
              {techStacks.map((tech, index) => (
                <Flex gap={2} align='center' key={index}>
                  <Image boxSize={4} mr={1} alt='hermit logo' src={`https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg`} borderRadius={'100%'} border={'3px solid #000'} />
                  <Text>{tech}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </Section>

      <Section delay={0.1} >
        <Box id='projects'>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="radiobox"
                title="RadioBox"
                thumbnail={radiobox}
                path='https://radio-box.vercel.app/'
              >
                A remake simple app that helps you to focus on studying-working, built in some easy soundtracks and lofi tracks style from youtube. Also feat with DND feature like Trello helps working more effecient.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="githubspace"
                title="Github space"
                path='https://githubspace-cmfsecd6d-xuandai-py.vercel.app'
                thumbnail={githubspace}
              >
                An easy track github profile with basic bio, stars, contributions, ...etc
              </WorkGridItem>
            </Section>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View the archive
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Section>



      <Section delay={0.3} >
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Flying stuffs,
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Box id='contact'>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoPhonePortrait} />}
                >
                  +84 373 782 161
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/xuandai-py" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @xuandai-py
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="mailto:buinguyenxuandai@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  whiteSpace={'normal'}
                  leftIcon={<Icon as={IoLogoGoogle} />}
                >
                  buinguyenxuandai@gmail.com
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.facebook.com/profile.php?id=100006465675143" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @hermit_crab
                </Button>
              </Link>
            </ListItem>

          </List>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
