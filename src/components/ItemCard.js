import React from "react"

const ItemCard = () => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">
                $32.99</span><img src="https://picsum.photos/200/300" alt="randomimage" />
        </div>
        <div className="content">
            <a href="#" className="header">Sample 1</a>
            <div className="meta">
                <i className="icon users"/>2-4&nbsp;
                <i className="icon wait"/>50min
            </div>
        </div>
    </div>
);

export default ItemCard;