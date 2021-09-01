import { GenreType } from "../common/types/genre";

interface GenreObjectType {
  value: GenreType
  label: string
  icon: string
}

export const GENRES: Array<GenreObjectType> = [
  { value: 'FICTION', label: 'Fiction', icon: '../assets/images/Fiction.svg' },
  { value: 'DRAMA', label: 'Drama', icon: '../assets/images/Drama.svg' },
  { value: 'HUMOR', label: 'Humor', icon: '../assets/images/Humour.svg' },
  { value: 'POLITICS', label: 'Politics', icon: '../assets/images/Politics' },
  { value: 'PHILOSOPHY', label: 'Philosophy', icon: '../assets/images/Philosophy.svg' },
  { value: 'HISTORY', label: 'History', icon: '../assets/images/History.svg' },
  { value: 'ADVENTURE', label: 'Adventure', icon: '../assets/images/Adventure.svg' },
]
