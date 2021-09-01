import React, { useCallback } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Typography from '../../common/components/typography'
import nextIcon from '../../assets/images/Next.svg'
import { GenreType } from '../../common/types/genre'

interface Props {
  genre: GenreType
  iconSrc: string
  onClick: Function
}

const GenreCard: React.FC<Props> = ({ genre, iconSrc, onClick }) => {
  const _onClick = useCallback(() => {
    onClick(genre)
  }, [onClick, genre])
  return (
    <HStack
      spacing='10px'
      bgColor='white'
      borderRadius='4px'
      px='10px'
      h='50px'
      boxShadow='0 2px 5px 0 rgba(211, 209, 238, 0.5)'
      onClick={_onClick}
    >
      <Box as='img' src={iconSrc} />
      <Typography variant='GenreCard'>{genre}</Typography>
      <Box as='img' src={nextIcon} />
    </HStack>
  )
}

export default GenreCard
