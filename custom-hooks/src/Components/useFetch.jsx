import React, { useEffect, useState } from 'react';

//Here we have created custom hook in which we can call it and simply pass url as the record as per requirement;
const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const call = await fetch(url);

      const res = await call.json();
      console.log(res);
      setData(res);
    }

    getData();
  }, []);

  return [data];
};

export default useFetch;
