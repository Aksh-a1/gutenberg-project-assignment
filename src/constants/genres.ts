import { GenreType } from "../common/types/genre";
import FictionIcon from '../assets/images/Fiction.svg'
import DramaIcon from '../assets/images/Drama.svg'
import HumourIcon from '../assets/images/Humour.svg'
import PoliIcon from '../assets/images/Politics.svg'
import PhilosophyIcon from '../assets/images/Philosophy.svg'
import HistoryIcon from '../assets/images/History.svg'
import AdventureIcon from '../assets/images/Adventure.svg'

interface GenreObjectType {
  value: GenreType
  label: string
  icon: string
}

export const GENRES: Array<GenreObjectType> = [
  { value: 'FICTION', label: 'Fiction', icon: FictionIcon },
  { value: 'DRAMA', label: 'Drama', icon: DramaIcon },
  { value: 'HUMOR', label: 'Humor', icon: HumourIcon },
  { value: 'POLITICS', label: 'Politics', icon: PoliIcon },
  { value: 'PHILOSOPHY', label: 'Philosophy', icon: PhilosophyIcon },
  { value: 'HISTORY', label: 'History', icon: HistoryIcon },
  { value: 'ADVENTURE', label: 'Adventure', icon: AdventureIcon },
]
