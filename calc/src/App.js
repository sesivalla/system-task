import React, { useState } from "react";
import './App.css';
function App () {

  const [input, setInput] = useState('');
  const click = (value) => { setInput (input + value)} ;

  const calculate = () => { try { setInput(String(eval(input)));
    
  } catch (error) { setInput('Error');
    
  }
}
  const clear = () => setInput("");



return(
  <div className="Calculator">Calculator 

  <div className="=display"><input type = "text" value = {input} readonly /></div>
  <div className="buttons">

    <button onClick={() => click ('7')}>7</button>
    <button onClick={() => click ('8')}>8</button>
    <button onClick={() => click ('9')}>9</button>
    <button onClick={() => click ('0')}>0</button>

    <button onClick={() => click ('4')}>4</button>
    <button onClick={() => click ('5')}>5</button>
    <button onClick={() => click ('6')}>6</button>
    <button onClick={() => click ('+')}>+</button>

    <button onClick={() => click ('1')}>1</button>
    <button onClick={() => click ('2')}>2</button>
    <button onClick={() => click ('3')}>3</button>
    <button onClick={() => click ('-')}>-</button>

    <button onClick={() => click ('/')}>/</button>
    <button onClick={() => click ('.')}>.</button>
    <button onClick={calculate}>=</button>
    <button onClick={clear}>C</button>

  </div>
  
  </div>
);

}

export default App;


