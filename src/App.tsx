import React, { Fragment, useCallback, useState } from 'react'
import ListPage from './pages/ListPage'
import GenrePage from './pages/GenrePage'
import { GenreType } from './common/types/genre'

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<null | GenreType>(null)

  const onGenreSelect = useCallback((genre: GenreType) => {
    setSelectedGenre(genre)
  }, [])

  const onBackClick = useCallback(() => {
    setSelectedGenre(null)
  }, [])

  return (
    <Fragment>
      {selectedGenre ? (
        <ListPage onBackClick={onBackClick} genre={selectedGenre} />
      ) : (
        <GenrePage onClick={onGenreSelect} />
      )}
    </Fragment>
  )
}

export default App
