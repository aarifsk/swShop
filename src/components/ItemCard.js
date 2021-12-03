import React from "react"
import PropTypes from "prop-types"

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

ItemCard.propTypes = {
    item:PropTypes.shape({
        name:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        licenses:PropTypes.string.isRequired,
        duration:PropTypes.number.isRequired,
        price:PropTypes.number.isRequired,
    }).isRequired
}
export default ItemCard;