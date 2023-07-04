import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [resultado, mostrarResultado] = useState('');

  function click(c){
    mostrarResultado(resultado.concat(c.target.name));
  }
  
  function calcular(){
    try {
      mostrarResultado(eval(resultado).toString());
    } catch (error) {
      mostrarResultado('Error');
    }
  }

  function borrar(){
    mostrarResultado('');
  }

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div>
        <input type="text" value={resultado}/>
        <div className="keypad">
          <button className="btn btn-secondary btn-lg" name="7" onClick={click}>7</button>
          <button className="btn btn-secondary btn-lg" name="8" onClick={click}>8</button>
          <button className="btn btn-secondary btn-lg" name="9" onClick={click}>9</button>
          <button className="btn btn-warning btn-lg" name="/" onClick={click}>/</button><br></br>
          <button className="btn btn-secondary btn-lg" name="4" onClick={click}>4</button>
          <button className="btn btn-secondary btn-lg" name="5" onClick={click}>5</button>
          <button className="btn btn-secondary btn-lg" name="6" onClick={click}>6</button>
          <button className="btn btn-warning btn-lg" name="*" onClick={click}>*</button><br></br>
          <button className="btn btn-secondary btn-lg" name="1" onClick={click}>1</button>
          <button className="btn btn-secondary btn-lg" name="2" onClick={click}>2</button>
          <button className="btn btn-secondary btn-lg" name="3" onClick={click}>3</button>
          <button className="btn btn-warning btn-lg" name="-" onClick={click}>-</button><br></br>
          <button className="btn btn-secondary btn-lg" name="0" onClick={click}>0</button>
          <button className="btn btn-secondary btn-lg" name="." onClick={click}>.</button>
          <button className="btn btn-outline-success btn-lg" onClick={calcular}>=</button>
          <button className="btn btn-warning btn-lg" name="+" onClick={click}>+</button><br></br>
          <button className="btn btn-danger btn-lg" onClick={borrar}>Borrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;