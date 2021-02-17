import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import colors from './color-data.json';

export const ColorContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <ColorContext.Provider value={{ colors }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
