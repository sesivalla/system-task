import React, { useState } from 'react';
import './App.css';

function App() {

  const [ input, setInput] = useState ('') ;

  const buttonclick = (value) => {setInput (input + value);};

  const calculate = () => { 
    try {

    // eslint-disable-next-line no-eval
    setInput(String(eval(input)));

    } catch(e) { 
      setInput('Error');
      const clear = () => {
        setInput('') ;
      }

      } ;

      const clear = () => {
        setInput('');
    };

        return( 
          <div className='calculator'>
            <h1 className=' calculator-heading'> calculator</h1>
            <div className="display">
  <input type="text" value={input} readOnly /></div>

            <div className='buttons'>
              <button onClick= {()=> buttonclick ('1')}> 1 </button>
              <button onClick= {()=> buttonclick ('2')}> 2 </button>
              <button onClick= {()=> buttonclick ('3')}> 3 </button>
              <button onClick= {()=> buttonclick ('-')}> - </button>

              <button onClick= {()=> buttonclick ('4')}> 4 </button>
              <button onClick= {()=> buttonclick ('5')}> 5 </button>
              <button onClick= {()=> buttonclick ('6')}> 6 </button>
              <button onClick= {()=> buttonclick ('+')}> + </button>

              <button onClick= {()=> buttonclick ('7')}> 7 </button>
              <button onClick= {()=> buttonclick ('8')}> 8 </button>
              <button onClick= {()=> buttonclick ('9')}> 9 </button>
              <button onClick= {()=> buttonclick ('0')}> 0 </button>

              <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={clear} style={{ gridColumn: "span 4" }}>C</button>
      </div>
    </div>
  );
}

    export default App

  
