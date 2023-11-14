import { Form } from './components/Form'

function App() {
  return (
    // animate-bounce
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4">
      <div className="text-left sm:text-center">
        <h1 className="font-bold text-gray-50 text-[2rem] drop-shadow-md animate-pulse">
          Inscrever-se
        </h1>
        <p className="text-gray-50 mt-1">
          Assine nossa Newsletter e mantenha-se informado
        </p>
      </div>
      <div>
        <Form />
      </div>
      <p className="max-w-md text-left sm:text-center text-gray-50">
        Ao se inscrever, você passará a receber os nossos e-mails com as
        melhores dicas, novidades e ofertas.
      </p>
    </div>
  )
}

export default App
