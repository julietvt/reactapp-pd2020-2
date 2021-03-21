import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Counter(props) {
  const {step} = props;
  // состояние count
  // его начальное значение 100
  // функция setCount следит за изменением состояния. аналог this.setState()
  const [count, setCount] = useState(100);  

  const increment = () => {
    setCount(count+step);
  };

  const decrement = () => {
    setCount(count-step);
  };

   return(
        <div>
          <h1>{count}</h1>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
    );
  }

export default Counter;
