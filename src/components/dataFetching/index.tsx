import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

interface Props {
  url: string
  children: (props: any) => React.ReactNode
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const DataFetching: React.FC<Props> = ({ url, children }) => {
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return children(data) as JSX.Element
}

export default DataFetching
