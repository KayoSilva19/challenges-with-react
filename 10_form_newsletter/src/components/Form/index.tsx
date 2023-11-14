import { useState, FormEvent } from 'react'
import { User } from '../../types/User'
import { Validate } from '../../utils/Validate'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)

  const [errors, setErrors] = useState<User | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setErrors(null)
    const data: User = {
      name,
      email,
      agree,
    }

    const validateErrors = Validate(data)

    if (Object.keys(validateErrors).length > 0) {
      return setErrors(validateErrors)
    }

    setName('')
    setEmail('')
    setAgree(false)
    alert('Obrigado por se inscrever!')
  }

  const divInputDefaultStyles =
    'flex flex-col text-zinc-700 font-medium text-[18px]'
  const inputDefaultStyle =
    'h-[60px] bg-gray-50 border border-zinc-700 rounded px-4 mt-2 '
  const errorStyle = 'text-red-500 font-normal text-sm mt-1'
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 min-h-[400px] max-w-[300px]  sm:min-w-[500px] md:min-w-[580px] rounded-lg drop-shadow-md mt-4 mb-4 p-6"
    >
      <div className={`${divInputDefaultStyles} mb-4`}>
        <label>Nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputDefaultStyle}
          type="text"
          placeholder="Digite o su nome"
        />
        {errors?.name && <span className={errorStyle}>{errors.name}</span>}
      </div>
      <div className={divInputDefaultStyles}>
        <label>E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputDefaultStyle}
          type="email"
          placeholder="Insira seu melhor e-mail"
        />
        {errors?.email && <span className={errorStyle}>{errors.email}</span>}
      </div>
      <div className="mt-4">
        <a href="#" className="text-blue-500 underline">
          Leia os termos
        </a>
        <div className="flex items-center gap-2 mt-2">
          <input
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            type="checkbox"
            className="cursor-pointer h-4 w-4"
          />
          <label className="text-md">Concordo com os termos</label>
        </div>
        {errors?.agree && <span className={errorStyle}>{errors.agree}</span>}
      </div>
      <button
        type="submit"
        className="bg-cyan-500 w-full h-[48px] rounded-md font-semibold text-lg text-gray-50 mt-6 hover:bg-cyan-700 hover:-translate-y-2 duration-300 transition-all"
      >
        Cadastrar
      </button>
    </form>
  )
}
