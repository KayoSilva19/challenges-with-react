import { useDispatch } from 'react-redux'
import { addTodo } from '../../slices/todoSlice'
import { useState } from 'react'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '') return
    dispatch(addTodo(input))
    setInput('')
  }

  const onAddTask = (e) => {
    const dataTask = e.target.value
    setInput(dataTask)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 w-[100%] flex-wrap sm:flex-nowrap gap-4 "
    >
      <input
        value={input}
        onChange={onAddTask}
        className="w-[100%] h-[54px] px-4 placeholder:text-zinc-500 rounded bg-zinc-800 outline-purple-700 text-zinc-200 font-medium"
        type="text"
        placeholder="Adicione uma tarefa..."
      />
      <button
        type="submit"
        className="bg-purple-700 w-full sm:w-auto rounded p-4 text-gray-50 font-semibold hover:bg-purple-600 transition-colors"
      >
        Enviar
      </button>
    </form>
  )
}
