import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Container className="text-red-500">
        <Container>
          <Outlet />
        </Container>
      </Container>
    </>
  )
}

export default App
