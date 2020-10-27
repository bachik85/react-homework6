import React from 'react';
import {connect} from 'react-redux';
import ProductList from "../../components/ProductList/ProductList";
import {selectProductFavorites} from "../../store/productListReduser";

const mapStateToProps = state => ({
  favorites: selectProductFavorites(state)
})

export const Favorites = connect(mapStateToProps, null)(({listItems, favorites}) => {
  const listItemsInFavorite = listItems.filter(({id}) => favorites.includes(id));

  return (
    <ProductList items={listItemsInFavorite} favorites={favorites}/>
  );
});

