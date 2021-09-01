import { extendTheme } from '@chakra-ui/react'
import globalStylesOverride from './globalStyles'
import colors from './colors'

const theme = extendTheme({
  colors: colors,
  styles: globalStylesOverride
})

export default theme
