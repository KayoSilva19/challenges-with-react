import { Trash } from '@phosphor-icons/react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, removeTask, filterTodos } from '../../slices/todoSlice'
import { useState } from 'react'

export const TodoList = () => {
  const styleButtonDefault =
    'bg-zinc-700 py-2 px-4 rounded text-gray-200 font-medium hover:bg-purple-700 hover:-translate-y-2 duration-300 transition-all'
  const styleButtonSelected =
    'py-2 px-4 rounded text-gray-200 font-medium bg-purple-700 hover:-translate-y-2 duration-300 transition-all'
  const styledButtonRemove =
    ' text-zinc-400 hover:text-red-500 hover:bg-zinc-700 hover:p-2 rounded transition-all'
  const styledTaskDefault =
    'bg-zinc-950 p-4 font-medium text-zinc-200 flex justify-between items-center rounded cursor-pointer hover:bg-zinc-800'
  const styledTaskCompleted =
    'bg-zinc-950 opacity-50	 p-4 font-medium text-zinc-500 flex justify-between items-center rounded line-through cursor-pointer '

  const { list, filter } = useSelector((state) => state.todos)

  const filteredList = list.filter((todo) => {
    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed
    if (filter === 'incompleted') return !todo.completed

    return true
  })

  const dispatch = useDispatch()

  const [isActiveButton, setIsActiveButton] = useState('all')

  const handleFilter = (e) => {
    const valueButton = e.target.value
    dispatch(filterTodos(valueButton))
    setIsActiveButton(valueButton)
  }
  return (
    <section className="mt-8">
      <header className="flex flex-wrap gap-4">
        <button
          onClick={handleFilter}
          className={
            isActiveButton === 'all' ? styleButtonSelected : styleButtonDefault
          }
          value="all"
        >
          Todas
        </button>
        <button
          onClick={handleFilter}
          className={
            isActiveButton === 'completed'
              ? styleButtonSelected
              : styleButtonDefault
          }
          value="completed"
        >
          Completas
        </button>
        <button
          onClick={handleFilter}
          value="incompleted"
          className={
            isActiveButton === 'incompleted'
              ? styleButtonSelected
              : styleButtonDefault
          }
        >
          Incompletas
        </button>
      </header>

      <ul className="mt-8 flex flex-col gap-2">
        {filteredList.map((todo) => {
          return (
            <li
              key={todo.id}
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={
                todo.completed ? styledTaskCompleted : styledTaskDefault
              }
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTask(todo.id))}
                className={styledButtonRemove}
              >
                <Trash size={24} />
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
