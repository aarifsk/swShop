import React from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
