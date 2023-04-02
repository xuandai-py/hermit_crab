import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Bui Nguyen Xuan Dai | @hermit_crab.
    </Box>
  )
}

export default Footer