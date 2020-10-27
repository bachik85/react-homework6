import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import Button from '../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faCartPlus} from '@fortawesome/free-solid-svg-icons';


function Product({
                   id,
                   picUrl,
                   name,
                   color,
                   price,
                   btnCard,
                   favorites,
                   setFavorites,
                   cart
                 }) {

  const inFavorites = favorites.includes(id);
  const inCart = cart.includes(id);

  const favoriteHandler = () => {
    if (!inFavorites) {
      setFavorites([...favorites, id]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]))
    } else {
      setFavorites(favorites.filter(el => el !== id));
      localStorage.setItem('favorites', JSON.stringify(favorites.filter(el => el !== id)))
    }
  }

  return (
    <div className="product-card">
      <img className="product-img" src={picUrl} alt="Изображение скоро появится на сайте"/>
      <div className="product-header">
        <div className="product-header-name">{name} </div>
        <FontAwesomeIcon icon={faStar} style={inFavorites && {color: "gold"}} onClick={favoriteHandler}/>
      </div>
      <div className="product-body">
        <p className="product-body-art">art:{id}</p>
        <p className="product-body-text">
          <span>Color: {color} </span>
        </p>
      </div>
      <div className="product-price">
        <span>{price}</span>
        {!inCart ? <Button {...btnCard}/> : <FontAwesomeIcon icon={faCartPlus}/>}
      </div>
    </div>
  )
}

Product.protoTypes = {
  id: PropTypes.string,
  picUrl: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  btnCard: PropTypes.object,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  cart: PropTypes.array
}

export default Product;