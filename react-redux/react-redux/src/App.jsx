import './App.css';
import Counter from './components/counter';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='card'>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <Counter />
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
