import { useState, useEffect } from 'react'
import axios from 'axios'

import { SelectCurrency } from './components/SelectCurrency'
import { CircleNotch } from '@phosphor-icons/react'

export function CurrencyConverter() {
  const [rates, setRates] = useState(null)
  const [fromCurrency, setfromCurrency] = useState('USD')
  const [toCurrency, setTocurrency] = useState('EUR')
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setconvertedAmount] = useState(0)
  const [currencyCountries, setCurrencyCountries] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://v6.exchangerate-api.com/v6/33332548d2112393d3992002/latest/USD',
      )
      .then((response) => {
        setRates(response.data.conversion_rates)
        setCurrencyCountries(Object.keys(response.data.conversion_rates))
      })
      .catch((error) => {
        console.log('Ocorreu um erro: ', error)
      })
  }, [])

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0
      const rateTo = rates[toCurrency] || 0

      setconvertedAmount(((amount / rateFrom) * rateTo).toFixed(2))
    }
  }, [amount, rates, fromCurrency, toCurrency])

  if (!rates) {
    return (
      <div className="flex items-center justify-center w-[560px] h-[490px] rounded drop-shadow-lg bg-zinc-900">
        <div className="flex gap-2 justify-center items-center text-center ">
          <CircleNotch className="animate-spin text-emerald-500 " size={32} />
          <span className="animate-pulse text-zinc-50 text-[24px] font-medium">
            Carregando...
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[560px] p-4 pt-8 pb-8 rounded drop-shadow-lg bg-zinc-900">
      <h2 className="font-bold text-[26px] text-neutral-50">
        Conversor de <span className="text-emerald-400">Moedas</span>
      </h2>
      <form className="flex flex-col mt-5">
        <input
          className="bg-transparent border rounded-md border-emerald-500 px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-50 text-[18px] font-medium"
          type="number"
          defaultValue={amount}
          placeholder="Digite o valor aqui"
          onChange={(e) => setAmount(e.target.value)}
        />
        <fieldset className="flex flex-col gap-4 mt-5">
          <div className="flex flex-col gap-2">
            <legend className="font-medium text-[20px] text-neutral-50">
              Selecionar <span className="text-emerald-400">moeda</span>
            </legend>
            <SelectCurrency
              changeCurrency={(e) => setfromCurrency(e.target.value)}
              rates={currencyCountries}
              defaultValue={fromCurrency}
            />
          </div>
          <div className="flex flex-col gap-2">
            <legend className="font-medium text-[20px] text-neutral-50">
              Para
            </legend>
            <SelectCurrency
              changeCurrency={(e) => setTocurrency(e.target.value)}
              rates={currencyCountries}
              defaultValue={toCurrency}
            />
          </div>
        </fieldset>
      </form>

      <h3 className="mt-5 font-medium text-zinc-50">
        {convertedAmount} {toCurrency}
      </h3>
      <p className="mt-4 bg-emerald-400 rounded p-4 font-semibold text-[18px]">
        {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
      </p>
    </div>
  )
}
