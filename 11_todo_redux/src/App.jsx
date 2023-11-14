import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import { Wrapper } from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <div className="flex flex-col w-[300px] sm:w-[500px] mt-16 ">
        <AddTodo />
        <TodoList />
      </div>
    </Wrapper>
  )
}

export default App
