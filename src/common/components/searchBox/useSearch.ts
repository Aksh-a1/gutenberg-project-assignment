import { useCallback, useState } from 'react'
import {
  searchBooksForQueryUrl,
  getBooksForGenreUrl
} from '../../../constants/apiUrls'
import { GenreType } from '../../types/genre'

interface Params {
  genre: GenreType
}

const useSearch = ({ genre }: Params) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null)
  const [searchUrl, setSearchUrl] = useState<string | null>(null)

  const onSearchChange = useCallback(
    (query: string) => {
      let timer
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        setSearchQuery(searchQuery)
        const newSearchUrl =
          query === ''
            ? getBooksForGenreUrl(genre)
            : searchBooksForQueryUrl(query, genre)
        setSearchUrl(newSearchUrl)
      }, 1500)
    },
    [genre]
  )

  return {
    onSearchChange,
    searchUrl
  }
}

export default useSearch
