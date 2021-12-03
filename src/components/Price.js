import React from "react";
import PropTypes from "prop-types"

const Price = ({cents}) => (
<span>
    $ {cents/100}{cents <1000 && " only!"}
</span>
);

Price.propTypes = {
    cents: PropTypes.number.isRequired
}
export default Price;
