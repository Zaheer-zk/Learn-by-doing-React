import { useCallback } from 'react';
import { useState } from 'react';
import Todos from './Todos';

/*
Try running this and click the count increment button.

You will notice that the Todos component re-renders even when the todos do not change.

Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.

This is because of something called "referential equality".

Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.
--------------------------------------------------------------------
To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:
*/
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos([...todos, 'New Todo']);
  }, [todos]); // only when todos added

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default App;
