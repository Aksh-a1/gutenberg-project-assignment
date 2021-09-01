import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Montserrat";
        src: local("Montserrat"),
          url("../../assets/fonts/Montserrat-Regular.ttf") format("truetype"),
          url("../../assets/fonts/Montserrat-SemiBold.ttf") format("truetype");
      }
    `}
  />
)

export default Fonts
