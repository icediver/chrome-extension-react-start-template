import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css'

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return <img src="icon.png" />;
};

root.render(<App />);


