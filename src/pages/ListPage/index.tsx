import React, { Fragment, useCallback } from 'react'
import { Box, HStack, SimpleGrid } from '@chakra-ui/react'
import Typography from '../../common/components/typography'
import Content from '../../components/content'
import backIcon from '../../assets/images/Back.svg'
import { GenreType } from '../../common/types/genre'
import PageHeader from '../../components/pageHeader'
import { getBooksForGenreUrl } from '../../constants/apiUrls'
import BookDetail from '../../components/bookDetail'
import Loading from '../../common/components/loading'
import SearchBox from '../../common/components/searchBox'
import useFetchBooksList from './useFetchBooksList'
import useSearch from '../../common/components/searchBox/useSearch'

interface Props {
  genre: GenreType
  onBackClick: Function
}

const ListPage: React.FC<Props> = ({ genre, onBackClick }) => {
  const bookListUrl = getBooksForGenreUrl(genre)
  const { onSearchChange, searchUrl } = useSearch({ genre })
  const fetchUrl = searchUrl ? searchUrl : bookListUrl
  console.log(fetchUrl)
  const { isLoading, booksList, lastUserElementRef, error } = useFetchBooksList(
    { fetchUrl }
  )

  const _onClick = useCallback(() => {
    onBackClick()
  }, [onBackClick])

  return (
    <Fragment>
      <PageHeader>
        <HStack spacing='20px' mb={'5'}>
          <Box as='img' src={backIcon} onClick={_onClick} />
          <Typography variant='H2'>{genre}</Typography>
        </HStack>
        <SearchBox onChange={onSearchChange}/>
      </PageHeader>
      <Content>
        <Fragment>
          <SimpleGrid columns={{ sm: 3, md: 4, lg: 6 }} spacing={'20px'}>
            {booksList.map((book: any, index) => (
              <BookDetail
                title={book.title}
                authors={book.authors}
                imageSrc={book.formats['image/jpeg']}
                key={`${book.id}-${index}`}
                ref={lastUserElementRef}
              />
            ))}
          </SimpleGrid>
          {isLoading && <Loading />}
          {error && <p>{error}</p>}
        </Fragment>
      </Content>
    </Fragment>
  )
}

export default ListPage
