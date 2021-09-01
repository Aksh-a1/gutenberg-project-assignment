import { GenreType } from '../common/types/genre'

const BASE_API_URL = 'http://skunkworks.ignitesol.com:8000/books?mime_type=image'

export const getBooksForGenreUrl = (genre: GenreType) => `${BASE_API_URL}&topic=${genre}`

export const searchBooksForQueryUrl = (query: string, genre: GenreType) => `${BASE_API_URL}&topic=${genre}&search=${encodeURIComponent(query)}`
