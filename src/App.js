import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import colors from "./colors.json";


function App() {

  const [color, setColor] = useState(colors[0]);

  const changeColor = (arg) => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox changeColor={changeColor} color={color} />
      <p>by <a href='https://github.com/Alvaro-IHC' className='repo'>Alvaro-IHC</a></p>
    </div>
  );
}

export default App;
