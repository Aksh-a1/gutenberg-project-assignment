import React from 'react'
import { Spinner, Box } from '@chakra-ui/react'

const Loading: React.FC = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Spinner
        mt='20'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Box>
  )
}

export default Loading
