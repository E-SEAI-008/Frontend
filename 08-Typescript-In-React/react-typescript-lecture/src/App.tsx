import { useState } from 'react'
import './App.css'
import type { IUser } from './types';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hello typescript in react</h1>
    </>
  )
}

export default App;
