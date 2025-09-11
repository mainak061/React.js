import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1 className="text-red-600 text-7xl text-center bg-black rounded-xl inline-block px-2 py-2">
        Redux Toolkit
      </h1>
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
