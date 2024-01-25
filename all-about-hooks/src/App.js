import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  memo,
} from 'react';
import './App.css';

//context
const ColorContext = React.createContext();

// initialReducerValues
const initialCounterValue = {
  counterValue: 0,
};

// reducerActionFunction
const counterReducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      counterValue: state.counterValue + 1,
    };
  } else {
    return {
      ...state,
      counterValue: state.counterValue - 1,
    };
  }
};

const initialColor = {
  color: 'blue',
};

const colorReducer = (state, action) => {
  if (action.type === 'set') {
    console.log(action.color);
    return {
      ...state,
      color: action.color,
    };
  }
};

function App() {
  const [state, setState] = useState(1);
  const [buttonText, setButtonText] = useState('Update property1');
  const [obj, setObj] = useState({
    property1: 'property1',
    property2: 'property2',
  });
  const [color, setColor] = useState('blue');

  //useEffect
  useEffect(() => {
    console.log('component mounting...');
    return () => {
      console.log('component dismounting...');
    };
  }, []);

  //useReducer takes initialReducerValue and reducerFunction

  const [reducerCounter, dispatch] = useReducer(
    counterReducer,
    initialCounterValue
  );

  const [colorGen, colorDispatch] = useReducer(colorReducer, initialColor);

  //useRef
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  //useMemo
  const memorizedCounterValue = useMemo(() => {
    return Math.sqrt(state);
  }, [state]);

  //useCallback

  const logFunction = useCallback(() => {
    console.log('func in useCallback');
  }, [state]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 30% 0 30%',
      }}
    >
      <h1 style={{ margin: '0 auto' }}>All about Hooks</h1>
      <h2>{state}</h2>
      <button onClick={() => setState((preValue) => preValue + 1)}>+</button>
      <button onClick={() => setState((preValue) => preValue - 1)}>-</button>
      <p>{obj.property1}</p>
      <p>{obj.property2}</p>
      <button
        onClick={() => {
          if (obj.property1 === 'property1') {
            setObj((preValue) => {
              return { ...preValue, property1: 'Updated property1' };
            });
            setButtonText('Reset');
          } else {
            setObj((preValue) => {
              return { ...preValue, property1: 'property1' };
            });
            setButtonText('Update property1');
          }
        }}
      >
        {buttonText}
      </button>
      <ColorContext.Provider value={{ colorGen, colorDispatch }}>
        <NestedComponent />
      </ColorContext.Provider>
      {/* <button
      onClick={() => {
        if (color === 'blue') {
          setColor('red');
        } else {
          setColor('blue');
        }
      }}
      >
        Switch color
      </button> */}
      {/* useReducer state */}
      <h2>{reducerCounter.counterValue}</h2>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
      <input type='text' ref={inputElement} />
      <button onClick={focusInput}>Click to focus input</button>
      <p> This is sqrt of state: {memorizedCounterValue}</p>
      <PureFunction logFunction={logFunction} />
    </div>
  );
}

const NestedComponent = () => {
  const { colorGen, colorDispatch } = useContext(ColorContext);
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <h1 style={{ color: colorGen.color }}>NestedComponent</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          colorDispatch({
            type: 'set',
            color: inputValue,
          });
        }}
      >
        Set color
      </button>
    </>
  );
};

const PureFunction = ({ logFunction }) => {
  useEffect(logFunction, [logFunction]);
  return (
    <>
      <h3>Pure Function</h3>
    </>
  );
};

// memo(PureFunction); // when we what re render only when props changes...

export default App;
