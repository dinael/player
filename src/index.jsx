import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/quicksand/300.css'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import './index.css'

import { StyledEngineProvider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import reportWebVitals from './reportWebVitals'

import App from './App'

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Custom variants
          'app-title': 'h1',
          'page-title': 'h2',
          'time': 'time',
          // Default variants
          'h1': 'h2',
          'h2': 'h3',
          'h3': 'h4',
          'h4': 'h5',
          'h5': 'h6',
          'h6': 'p',
          'subtitle1': 'p',
          'subtitle2': 'p',
          'body1': 'p',
          'body2': 'span',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
