import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.component';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals(console.log);
