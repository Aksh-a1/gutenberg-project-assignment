import React from 'react'
import ReactDOM from 'react-dom'
//Below three lines imports local fonts
import './assets/fonts/Montserrat-Regular.ttf'
import './assets/fonts/Montserrat-SemiBold.ttf'
import './index.css'

import ThemeProvider from './common/styles/ThemeProvider'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
