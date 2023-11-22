import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Container className="text-slate-50">
        <Container className="mt-10">
          <Outlet />
        </Container>
      </Container>
    </>
  )
}

export default App
