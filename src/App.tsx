import { useState } from 'react';
import './App.css';

const App = () => {
  const [n, setN] = useState(0);

  const handleMinus = () => {
    setN(n - 1);
  }
  const handleMore = () => {
    setN(n + 1);
  }

  return (
    <div className='div-total'>
      <p><b>Contator Simples</b></p>
      <button onClick={handleMinus}>-</button>
      <div>{n}</div>
      <button onClick={handleMore}>+</button>
    </div>
  );
}

export default App;
