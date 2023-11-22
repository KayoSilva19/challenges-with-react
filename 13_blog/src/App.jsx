import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

function App() {
  return (
    <Container className="text-red-500">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Container>
  )
}

export default App
