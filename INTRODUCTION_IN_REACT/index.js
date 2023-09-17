import React from 'react';
import ReactDOM from 'react-dom/client';
// <h1>Hello World, from React
const header = React.createElement('h1', {}, 'Hello World, from React');

/**
 * React.createElement('type', 'props', [child's]) {}
 */

//<div><h1>Heading 1</h1><h2>Heading 2</h2></div>
const heading1 = React.createElement(
  'h1',
  {
    id: 'heading1',
    key: 1,
  },
  'Heading 1'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'heading2',
    key: 2,
  },
  'Heading 2'
);

const container = React.createElement(
  'div',
  {
    id: 'container',
    key: 3,
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(header);
// root.render(container);

//Bundlers : Vite, webpack, parcel✅✅
/**
 * Hot module replacement (HRM)
 * File Watcher algorithm
 * Bundling
 * minify
 * Clearing our code
 * dev and production build
 * super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible for all and older versions of browsers
 * Created a server.
 */

// JSX : It use babel to convert JSX code into JavaScript
const heading = (
  <h1 id="header" className="header" key="1">
    Hello world!
  </h1>
);

// Function component

const HeadComponents = () => {
  return (
    <>
      {heading}
      <h3>from the javascript element but inside the function component</h3>
    </>
  );
};

const heading3 = (
  <React.Fragment>
    <h1 id="header" className="header" key="1">
      Inside React Component
    </h1>
    {/* To write js inside jsx use -> {} */}
    {1 + 2 + ' Adding two number inside jsx code'}
    {/* Calling Js function normally inside the JSX */}
    {HeadComponents()}
    {/* Calling Js function in JSX in form of JSX */}
    <HeadComponents />
  </React.Fragment>
);

root.render(heading3);
