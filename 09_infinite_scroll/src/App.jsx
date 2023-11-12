import { useState } from 'react'
import { InfiniteScroll } from './components/InfiniteScroll'
import { Wrapper } from './components/Wrapper/index'
import { Header } from './components/Header'

function App() {
  const [theme, setTheme] = useState('dark')

  function handleChangeTheme() {
    const html = document.querySelector('html')

    if (theme === 'dark') {
      setTheme('light')
      return html.classList.remove('dark')
    }

    setTheme('dark')
    html.classList.add('dark')
  }
  return (
    <>
      <Header handleThemeChange={handleChangeTheme} currentTheme={theme} />
      <Wrapper>
        <InfiniteScroll />
      </Wrapper>
    </>
  )
}

export default App
