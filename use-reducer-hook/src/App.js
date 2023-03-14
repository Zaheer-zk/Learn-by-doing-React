import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 2;
  } else if (action.type === 'DEC') {
    return state - 2;
  } else {
    return state * 2;
  }
};
function App() {
  //By using reducer we can manipulate multiple state at a time by a function here reducer function have two para (state, action)
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <header className="App-header">
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: 'INC' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DEC' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'MUL' })}>
          Multiplication
        </button>
      </header>
    </>
  );
}

export default App;
