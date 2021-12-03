import React from "react";
import ItemCard from "./ItemCard";

const ItemsList = ({items}) => (
    <div className="ui three cards">
        {items.map(item =><ItemCard item={item} key={item._id} />)}
    </div>
);

export default ItemsList;