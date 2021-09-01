import { Box } from '@chakra-ui/react'
import React from 'react'
import pattern from '../../assets/images/Pattern.svg'

interface Props {
  children: React.ReactNode
  background?: boolean
}

const PageHeader: React.FC<Props> = ({ children, background=false }) => {
  const backgroundImage = background ? pattern : undefined
  return <Box backgroundImage={backgroundImage} px="40" py="10">{children}</Box>
}

export default PageHeader
