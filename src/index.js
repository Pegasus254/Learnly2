import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProgressProvider } from './contexts/ProgressContext';

ReactDOM.render(
  <React.StrictMode>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </React.StrictMode>,
  document.getElementById('root')
); 