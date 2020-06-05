import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, LinkImage, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <LinkImage to="/">
        <img src={logo} alt="" />
      </LinkImage>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
