import { Card, CardActions, CardContent, Typography } from '@mui/material'

export const TaxReport = ({ textData }) => {
  const formatValueIncome = textData.income.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
  const formatValueTax = textData.tax.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card
      sx={{
        minWidth: 275,
        marginX: '24px',
        marginY: '36px',
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Relatório de impostos
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Nome: {textData.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Idade: {textData.age}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Renda: {formatValueIncome}
        </Typography>
        <Typography variant="body1" color="red">
          Imposto a pagar: {formatValueTax}
        </Typography>
      </CardContent>
    </Card>
  )
}
