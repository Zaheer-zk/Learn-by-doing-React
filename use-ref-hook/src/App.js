import React, { useEffect, useRef, useState } from 'react';

//useRef help us render only when we done some changes
// we also can get previous stage using useRef

function App() {
  const [input, setInput] = useState('');

  // this useRef helping me to get the render state only when we do some changes
  const counter = useRef(0);

  const prevState = useRef('');

  const inputField = useRef();

  useEffect(() => {
    counter.current = counter.current + 1;
    prevState.current = input;
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    console.log('inputField.current : ', inputField.current);
    inputField.current.focus();
    inputField.current.value = '';
    inputField.current.style.border = '2px solid crimson';
  };

  return (
    <>
      <input
        ref={inputField}
        type="text"
        name="Input"
        id="Input"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Click me</button>
      <h4>Application is rerendering this much time : {counter.current}</h4>
      <h4>My prevState is {prevState.current}</h4>
    </>
  );
}

export default App;
