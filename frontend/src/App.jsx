import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-6xl text-center text-orange-500 font-bold'>Hello world</h1>
    </>
  )
}

export default App