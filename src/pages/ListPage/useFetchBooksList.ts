import { useCallback, useEffect, useState, useRef } from 'react'
import axios from 'axios'

interface Params {
  fetchUrl: string
  isSearch: boolean
}

const useFetchBooksList = ({ fetchUrl, isSearch }: Params) => {
  const [currentUrl, setCurrentUrl] = useState<string>(fetchUrl)
  const [booksList, setBooksList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const nextUrl = useRef<string | null>(null)
  const observer = useRef<IntersectionObserver>()
  const wasPreviousCallSearch = useRef<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    axios
      .get(currentUrl)
      .then(({ data }) => {
        const { results, next } = data
        nextUrl.current = next
        if (isSearch) {
          setBooksList([...results])
          wasPreviousCallSearch.current = true
        }
        wasPreviousCallSearch.current
          ? setBooksList(results)
          : setBooksList((prev) => [...prev, ...results])
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))
    //eslint-disable-next-line
  }, [currentUrl])

  useEffect(() => {
    setCurrentUrl(fetchUrl)
  }, [fetchUrl])

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextUrl.current) {
          setCurrentUrl(nextUrl.current)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading]
  )

  return {
    isLoading,
    booksList,
    lastElementRef,
    error
  }
}

export default useFetchBooksList
