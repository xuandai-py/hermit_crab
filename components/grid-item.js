import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
              
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)


export const WorkGridItem = ({ children, title, thumbnail = '', path = '' }) => (
    <Box w="100%" textAlign="center" >
        <NextLink href={path} target="_blank">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    // style={{height: '150px', borderRadius: '12px', objectFit: 'fill' }}
                />
                {/* <LinkOverlay href={path}> */}
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
                <Text fontSize={14}>{children}</Text>
                {/* </LinkOverlay> */}
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`.grid-item-thumbnail { border-radius: 12px;}`} />
)