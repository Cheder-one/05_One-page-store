import React from "react";
import PropTypes from "prop-types";

// Карточка продукта
const Product = ({
  id,
  image,
  title,
  price,
  description,
  rating: { rate }
}) => {
  return (
    <div key={id} className="col-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
          <h6 className="card-subtitle mb-2">{`${rate} \u2605`}</h6>
          <p className="card-text">{description}</p>
          <button href="#" className="btn btn-primary">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired
  })
};

export default Product;
