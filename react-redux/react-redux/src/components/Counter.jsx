import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state);
  console.log(count);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
