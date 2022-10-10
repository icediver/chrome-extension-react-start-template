import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return <p>Hello world!</p>;
};

root.render(<App />);

// ReactDOM.render(App, document.body)
