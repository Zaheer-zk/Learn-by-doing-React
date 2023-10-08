import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './Counter';
import './App.css';

const App = () => (
  <div className='card'>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);

export default App;
