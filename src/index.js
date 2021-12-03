import React from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import ItemCard from './components/ItemCard';

const items = [
  {"name": "Software 1", "price":"32.99", "licenses":"4", "duration":"60", "image":"https://picsum.photos/200/300"},
  {"name": "Software 2", "price":"3.9", "licenses":"3", "duration":"30", "image":"https://picsum.photos/200/300"},
  {"name": "Software 3", "price":"49.2", "licenses":"1", "duration":"180", "image":"https://picsum.photos/200/300"}
]
render(
  <React.StrictMode>
    <ItemCard item={items[0]} />
  </React.StrictMode>,
  document.getElementById('root')
);
