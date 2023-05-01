import React from 'react';
import './Header.module.css'

const Shapka = (props) => {
  return (
    <header>
      <h3>React Sneakers</h3>
      <img src="img/logo.png" width={155} height={67.5} />
      <ul>
        <li onClick={props.onClickCart}>
          <img src="img/cart.svg" alt="Корзина" width={19} height={19} />
        </li>
        <li>
          <img src="img/user.svg" alt="Пользователь" width={19} height={19} />
        </li>
      </ul>
    </header>
  );
}

export default Shapka;