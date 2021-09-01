import { Box, forwardRef } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Typography from '../../common/components/typography'

type Author = {
  name: string
}

interface Props {
  imageSrc: string
  title: string
  authors: Author[]
}

const BookDetail = forwardRef(({ imageSrc, title, authors }: Props, ref) => {
  const authorName = useMemo(
    () =>
      authors.map((val) => val.name.split(', ').reverse().join(' ')).join(', '),
    [authors]
  )
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='114px'
      _hover={{ cursor: 'pointer' }}
      ref={ref}
    >
      <Box
        as='img'
        width='114px'
        height='162px'
        borderRadius='8px'
        boxShadow='0 2px 5px 0 rgba(211, 209, 238, 0.5)'
        src={imageSrc}
      />
      <Typography variant='BookName' noOfLines={2}>
        {title}
      </Typography>
      <Typography variant='BookAuthor'>{authorName}</Typography>
    </Box>
  )
})

export default BookDetail
