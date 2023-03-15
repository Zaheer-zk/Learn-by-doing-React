import { useState, useEffect } from 'react';
import useFetch from './Components/useFetch';
function App() {
  const [data] = useFetch(
    'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001s'
  );
  return (
    <>
      <span>
        {data.map((ele, idx) => {
          return <h6 key={idx}>{ele.firstName}</h6>;
        })}
      </span>
    </>
  );
}

export default App;
