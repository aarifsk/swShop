import React from "react";
import ItemsList from "./ItemsList";

const items = [
    {_id:1, name: "Software 1", price:3299, licenses:4, duration:"60", image:"https://picsum.photos/200/200"},
    {_id:2, name: "Software 2", price:390, licenses:2, duration:"30", image:"https://picsum.photos/300/300"},
    {_id:3, name: "Software 3", price:1599, licenses:1, duration:"180", image:"https://picsum.photos/300/200"}
  ]
  
const App = () => (
    <div className="ui container">
        <ItemsList items={items}/>
    </div>
);

export default App;
