import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Spill the Tea</h1>

      <TeaForm onAddTea={addTea} />
      <TeaList teas={teas} onDelete={deleteTea} />
    </div>
  );
}

export default App;
