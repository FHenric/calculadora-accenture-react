import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

import "./styles.css";

function Calculadora() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    const valor = e.target.value;
    if (num === 0) {
      setNum(valor);
    } else {
      setNum(num + valor);
    }
  }

  function clear(e) {
    setNum(0);
  }

  function porcentagem() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else if (num < 0) {
      setNum(Math.abs(num));
    }
  }

  function calculate() {
    switch (operator) {
      case "/":
        setNum(oldNum / num);
        break;

      case "X":
        setNum(oldNum * num);
        break;

      case "-":
        setNum(oldNum - num);
        break;

      case "+":
        setNum(parseFloat(oldNum) + parseFloat(num));
        break;

      default:
        setNum(0);
        break;
    }

    //Poderia ter feito desta forma, mas optei pelo switch por achar menos verboso e repetitivo!

    // if(operator === '/'){
    //   setNum(oldNum / num)

    // } else if(operator === 'X'){
    //     setNum(num * oldNum)

    // } else if(operator === '-') {
    //     setNum(oldNum - num)

    // } else if( operator === '+') {
    //     setNum(parseFloat(oldNum) + parseFloat(num))
    // }
  }

  function operadorHandler(e) {
    var inputOperator = e.target.value;
    setOperator(inputOperator);
    setOldNum(num);
    setNum(0);
  }

  return (
    <div id="calc">
      <Box m={4} />
      <Container>
        <div className="wrapper">
          <div>
            <h1 className="results">{num}</h1>

            <div className="btn">
              <button onClick={clear}>AC</button>
              <button onClick={changeSign}>+/-</button>
              <button onClick={porcentagem}>%</button>
              <button onClick={operadorHandler} value="/" className="orange">
                /
              </button>

              <button onClick={inputNum} value={7} className="gray">
                7
              </button>
              <button onClick={inputNum} value={8} className="gray">
                8
              </button>
              <button onClick={inputNum} value={9} className="gray">
                9
              </button>
              <button onClick={operadorHandler} value="X" className="orange">
                X
              </button>

              <button onClick={inputNum} value={4} className="gray">
                4
              </button>
              <button onClick={inputNum} value={5} className="gray">
                5
              </button>
              <button onClick={inputNum} value={6} className="gray">
                6
              </button>
              <button onClick={operadorHandler} value="-" className="orange">
                -
              </button>

              <button onClick={inputNum} value={1} className="gray">
                1
              </button>
              <button onClick={inputNum} value={2} className="gray">
                2
              </button>
              <button onClick={inputNum} value={3} className="gray">
                3
              </button>
              <button onClick={operadorHandler} value="+" className="orange">
                +
              </button>

              <button onClick={inputNum} value={0} className="gray">
                0
              </button>
              <button className="null"></button>
              <button onClick={inputNum} className="gray" value={"."}>
                .
              </button>
              <button onClick={calculate} className="orange">
                =
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Calculadora;
