import React from 'react';

import { CartItemContainer, CartItemImage, CartItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='Item'/>
    <CartItemDetailsContainer>
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;