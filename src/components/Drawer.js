import React from "react";


const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__cart-title">
          <h2 className="drawer__cart">Корзина</h2>
          <img onClick={onClose} className="drawer__cart-remove" width={32} height={32} src="/img/remove.svg" alt="close" />
        </div>

        {
          items.length > 0 ? (
            <>
              <div className="drawer__cart-items">
                {items.map((obj) => (
                  <div key={obj.id} className="drawer__cart-item">
                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cartItemImg"></div>
                    <div className="drawer__cart-info">
                      <p className="drawer__cart-name">{obj.title}</p>
                      <b className="drawer__cart-prise">{obj.price}</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)} className="drawer__cart-remove" src="/img/remove.svg" alt="remove" />
                  </div>
                ))}
              </div>
              <ul className="cart__block">
                <li className="item">
                  <span>Итого :</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="item">
                  <span>Налог 5% :</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button>Оформить заказ</button>
            </>

          ) : (
            <div className="cartEmpty">
              <img className="cartEmpty-img" src="/img/emptyCart.jpg" alt="пустая корзина" />
              <h2 className="cartEmpty__title">Корзина пустая</h2>
              <p className="cartEmpty__paragraph">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className="cartEmpty__button">
                <img className="cartEmpty__button-img" src="/img/vectorL.svg" alt="вернуться назад" />
                <div className="cartEmpty__button-text">Вернуться назад</div>
              </button>
            </div>
          )
        }



      </div>
    </div>
  );
}

export default Drawer;