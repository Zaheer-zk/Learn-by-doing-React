import { useState } from 'react';
import Todos from './Todos';

/*
When you click the increment button, the Todos component re-renders.
If this component was complex, it could cause performance issues.
To fix this, we can use memo.
Use memo to keep the Todos component from needlessly re-rendering.
Wrap the Todos component export in memo:
 */
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
