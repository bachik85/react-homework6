import React from 'react';
import {connect} from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import {selectProductCart} from "../../store/productListReduser";
import {FormCart} from '../../components/FormCart';

const mapStoreToProps = state => ({
  cart: selectProductCart(state)
});

export const Cart = connect(mapStoreToProps, null)(({listItems, cart}) => {
  const listItemsInCart = listItems.filter(({id}) => cart.includes(id));

  return (
    <>
      <ProductList items={listItemsInCart} cart={cart} delBtnCart/>
      {cart.length > 0 && <FormCart/>}
    </>
  );
})

