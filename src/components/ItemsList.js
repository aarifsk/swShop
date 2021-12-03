import React from "react";
import PropTypes from "prop-types"
import ItemCard from "./ItemCard";

const ItemsList = ({items}) => (
    <div className="ui three cards">
        {items.map(item =><ItemCard item={item} key={item._id} />)}
    </div>
);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemsList;