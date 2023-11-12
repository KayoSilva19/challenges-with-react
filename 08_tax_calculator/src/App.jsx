import { useState } from 'react'
import './App.css'
import { TaxForm } from './components/TaxForm'
import { TaxReport } from './components/TaxReport'
import { Container, Typography } from '@mui/material'

function App() {
  const [textData, setTextData] = useState(null)

  const calculateTax = (values) => {
    let tax = 0

    const income = parseFloat(values.income)

    if (income <= 10000) {
      tax = income * 0.05
    } else if (income <= 20000) {
      tax = income * 0.1
    } else {
      tax = income * 0.15
    }

    const taxCurrentData = {
      ...values,
      tax,
    }

    setTextData(taxCurrentData)
  }
  return (
    <Container style={{ maxWidth: '800px', margin: '60px auto' }}>
      <Typography variant="h3" align="center" style={{ marginBottom: '32px' }}>
        Calculadora de Impostos
      </Typography>
      <TaxForm onSubmitForm={calculateTax} />
      {textData && <TaxReport textData={textData} />}
    </Container>
  )
}

export default App
