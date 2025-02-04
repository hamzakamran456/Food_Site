import { assets } from "../../assets/assets";
import "./FoodItem.css";
import PropTypes from "prop-types"; // Optional but helpful

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image || assets.placeholder} alt={name} />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {assets.rating_starts ? (
            <img src={assets.rating_starts} alt="Rating" />
          ) : (
            <p>No rating available</p>
          )}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;

