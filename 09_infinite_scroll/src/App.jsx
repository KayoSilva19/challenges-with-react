import { useEffect, useState } from 'react'
import { InfiniteScroll } from './components/InfiniteScroll'
import { Wrapper } from './components/Wrapper/index'
import { Header } from './components/Header'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('currentTheme') || '')

  const currentTheme = localStorage.getItem('currentTheme')

  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove()
    html.classList.add(currentTheme)
  }, [currentTheme])

  const darkTheme = createTheme({
    palette: {
      mode: currentTheme,
    },
  })

  function handleChangeTheme() {
    const html = document.querySelector('html')

    if (theme === 'dark') {
      setTheme('')
      localStorage.setItem('currentTheme', 'light')
      return html.classList.remove('dark')
    }

    setTheme('dark')
    localStorage.setItem('currentTheme', 'dark')
    html.classList.add('dark')
  }
  return (
    <>
      <Header handleThemeChange={handleChangeTheme} currentTheme={theme} />
      <Wrapper>
        <ThemeProvider theme={darkTheme}>
          <InfiniteScroll />
        </ThemeProvider>
      </Wrapper>
    </>
  )
}

export default App
