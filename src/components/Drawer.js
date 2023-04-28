const Drawer = ({onClose, items =[] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__cart-title">
          <h2 className="drawer__cart">Корзина</h2>
          <img onClick={onClose} className="drawer__cart-remove" width={32} height={32} src="/img/remove.svg" alt="close" />
        </div>
        <div className="drawer__cart-items">
          {items.map((obj) => (
            <div className="drawer__cart-item">
              <div style={{backgroundImage: `url(${obj.imageUrl})`}}
              className="cartItemImg"></div>              
              <div className="drawer__cart-info">
                <p className="drawer__cart-name">{obj.title}</p>
                <b className="drawer__cart-prise">{obj.price}</b>
              </div>
              <img className="drawer__cart-remove" src="/img/remove.svg" alt="remove" />
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
      </div>
    </div>
  );
}

export default Drawer;