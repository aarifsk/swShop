import React from "react"

const ItemCard = ({item}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">
                {item.price}</span><img src={item.image} alt="randomimage" />
        </div>
        <div className="content">
            <a href="#" className="header">{item.name}</a>
            <div className="meta">
                <i className="icon users"/>{item.licenses}&nbsp;
                <i className="icon wait"/>{item.duration}min.
            </div>
        </div>
    </div>
);

export default ItemCard;