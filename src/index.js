import React from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import ItemCard from './components/ItemCard';

render(
  <React.StrictMode>
    <ItemCard />
  </React.StrictMode>,
  document.getElementById('root')
);
