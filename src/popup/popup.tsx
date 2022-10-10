import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import './popup.scss';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const App: FC = () => {
  return (
    <>
      <h1>React chrome extension template</h1>
      <img src="icon.png" />
    </>
  );
};

root.render(<App />);
