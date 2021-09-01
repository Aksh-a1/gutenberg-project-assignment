import { Box, forwardRef, useToast } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'
import Typography from '../../common/components/typography'
import { getBookLink, Format, Author, getAuthorName } from './helper'

interface Props {
  imageSrc: string
  title: string
  authors: Author[]
  formats: Format
}

const BookDetail = forwardRef(
  ({ imageSrc, title, authors, formats }: Props, ref) => {
    const toast = useToast()
    const authorName = useMemo(() => getAuthorName(authors), [authors])
    const bookLink = useMemo(() => getBookLink(formats), [formats])

    const onClick = useCallback(() => {
      if (bookLink) window.open(bookLink)
      else {
        toast({
          title: 'No viewable version available',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    }, [bookLink, toast])

    return (
      <Box
        display='flex'
        flexDirection='column'
        width='114px'
        _hover={{ cursor: 'pointer' }}
        ref={ref}
        onClick={onClick}
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
        <Typography variant='BookAuthor' noOfLines={2}>
          {authorName}
        </Typography>
      </Box>
    )
  }
)

export default BookDetail
