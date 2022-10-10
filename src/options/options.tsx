import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import './options.css'

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const App: FC = () => {
  return <img src="icon.png" />;
};

root.render(<App />);
