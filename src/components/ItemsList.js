import React from "react";
import PropTypes from "prop-types"
import ItemCard from "./ItemCard";

const ItemsList = ({items}) => (
    <div className="ui four cards">
        {items.length === 0 ? (
            <div className="ui icon message">
                <i className="icon info">
                    <div className="content">
                        <div className="header">No items!</div>
                        <p>Change filters!</p>
                    </div>
                </i>
            </div>
        ) : (
            items.map(item =><ItemCard item={item} key={item._id} />)
        )}
        
    </div>
);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

ItemsList.defaultProps = {
    items: []
};
export default ItemsList;