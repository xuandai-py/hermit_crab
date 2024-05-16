import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import {
    IoLogoGithub
} from 'react-icons/io5';
// import resume from '/hermit-re.pdf';


const LinkItem = ({ path, href, _target, children, ...props }) => {
    const active = path === href
    const router = useRouter()
    if (router.pathname !== '/') {
        href = `/${href}`
    }
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        // <NextLink href={href} passHref>
        <Link as={NextLink} href={href}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            display='flex' target={_target} {...props}>
            {children}
        </Link>
        // </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    console.log(path);
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        zIndex={1}
        {...props}
        bg="#08182F"
        px={{ base: 4, lg: 0 }}
      >
        <Container
          display="flex"
          p="2"
          maxW="container.lg"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex
            align="center"
            mr={5}
            borderRadius={"sm"}
            border="3px solid transparent"
            css={{
              borderImage:
                "linear-gradient(to bottom right, #1DB954, #000, #1DB954) 1"
            }}
          >
            <NextLink href="/">
              <Image
                boxSize={8}
                cursor="pointer"
                alt="hermit logo"
                src={`https://res.cloudinary.com/dxhl09emw/image/upload/v1677746843/radio/Frame_16_kqw1wj.svg`}
                m={1}
              />
            </NextLink>
          </Flex>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            with={{ base: "full", md: "auto" }}
            alignItems="center"
            justify="flex-end"
            gap={5}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="#projects" path={path}>
              <Text color="#1DB954">01.</Text> Projects
            </LinkItem>

            <LinkItem href="#about" path={path}>
              <Text color="#1DB954">02.</Text> About
            </LinkItem>
            <LinkItem href="#contact" path={path}>
              <Text color="#1DB954">03.</Text>Contact
            </LinkItem>
            <LinkItem
              href="https://github.com/xuandai-py"
              path={path}
              _target="_blank"
            >
              <Icon as={IoLogoGithub} mr={2} mt="2px" color="#1DB954" />
              View Source
            </LinkItem>
            <Button variant="outline" colorScheme="teal">
              <LinkItem
                className="resume-button"
                href="/hermit-re.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </LinkItem>
            </Button>
          </Stack>

          <Box flexGrow={{ base: 1, md: 0 }} align="right">
            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="#about" passHref>
                    <MenuItem>
                      <Text color="#1DB954">01.</Text> About
                    </MenuItem>
                  </NextLink>
                  <NextLink href="#projects" passHref>
                    <MenuItem>
                      <Text color="#1DB954">02.</Text> Projects
                    </MenuItem>
                  </NextLink>
                  <NextLink href="#contact" passHref>
                    <MenuItem>
                      <Text color="#1DB954">03.</Text>Contact
                    </MenuItem>
                  </NextLink>
                  <MenuItem target="_blank" href="#">
                    <Icon as={IoLogoGithub} mr={2} mt="-1px" color="#1DB954" />
                    View Source
                  </MenuItem>
                  {/* <Button
                    variant="outline"
                    colorScheme="teal"
                    mt={1}
                    width="full"
                  >
                    <LinkItem
                      className="resume-button"
                      href="/hermit-re.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </LinkItem>
                  </Button> */}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    )
}

export default Navbar
