import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ title, description, imageUrl }) => (
  <div className="card">
    {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Card;
