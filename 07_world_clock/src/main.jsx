import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { DefaultTheme } from './Styles/DefaultTheme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={DefaultTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
