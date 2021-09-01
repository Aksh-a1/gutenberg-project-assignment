import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Montserat";
        src: local("Montserat"),
          url("../../../public/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype"),
          url("../../../public/fonts/Montserrat/Montserrat-SemiBold.ttf") format("truetype"),
      }
    `}
  />
)

export default Fonts
