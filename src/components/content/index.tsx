import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return <Box bgColor='secondary' minH="100%" px="40" py="10">{children}</Box>
}

export default Content
