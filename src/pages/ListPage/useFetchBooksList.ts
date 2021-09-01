import { useCallback, useEffect, useState, useRef } from 'react'
import useSWR from 'swr'
import axios from 'axios'

interface Params {
  fetchUrl: string
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useFetchBooksList = ({ fetchUrl }: Params) => {
  const [url, setUrl] = useState<string>(fetchUrl)
  const [booksList, setBooksList] = useState<any[]>([])
  const [nextUrl, setnextUrl] = useState<string | null>(null)
  const { data, error } = useSWR(url, fetcher)
  const isLoading = !data && !error
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (data) {
      const { results, next } = data
      setnextUrl(next)
      setBooksList((previousList) => [...previousList, ...results])
    }
  }, [data])

  const lastUserElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          setUrl(nextUrl)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, nextUrl]
  )

  return {
    isLoading,
    booksList,
    lastUserElementRef,
    error
  }
}

export default useFetchBooksList
