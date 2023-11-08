export function SelectCurrency({ rates, defaultValue, changeCurrency }) {
  return (
    <select
      key={rates}
      onChange={changeCurrency}
      defaultValue={defaultValue}
      className="bg-zinc-50 px-4 rounded py-3 focus:outline-none cursor-pointer"
    >
      {rates.map((currency) => {
        return (
          <option value={currency} key={currency}>
            {currency}
          </option>
        )
      })}
    </select>
  )
}
