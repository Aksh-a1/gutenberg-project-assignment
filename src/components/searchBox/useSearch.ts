import { useCallback, useRef, useState } from 'react'
import { searchBooksForQueryUrl } from '../../constants/apiUrls'
import { GenreType } from '../../common/types/genre'

interface Params {
  genre: GenreType
}

const useSearch = ({ genre }: Params) => {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const [searchUrl, setSearchUrl] = useState<string>('')

  const onSearchChange = useCallback(
    (query: string) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        const newSearchUrl =
          query === '' ? '' : searchBooksForQueryUrl(query, genre)
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
