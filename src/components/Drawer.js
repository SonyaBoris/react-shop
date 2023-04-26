const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <div className="drawer__cart-title">
          <h2 className="drawer__cart">Корзина</h2>
          <img className="drawer__cart-remove" width={32} height={32} src="/img/remove.svg" alt="remove" />
        </div>
        <div className="drawer__cart-items">
          <div className="drawer__cart-item">
            <img className="drawer__cart-img" width={70} height={70} src="/img/sneakers/sn1.jpg" alt="sneakers" />
            <div className="drawer__cart-info">
              <p className="drawer__cart-name">Мужские Кроссовки Nike Air Max 270</p>
              <b className="drawer__cart-prise">12 999 руб.</b>
            </div>
            <img className="drawer__cart-remove" src="/img/remove.svg" alt="remove" />
          </div>
          <div className="drawer__cart-item">
            <img className="drawer__cart-img" width={70} height={70} src="/img/sneakers/sn1.jpg" alt="sneakers" />
            <div className="drawer__cart-info">
              <p className="drawer__cart-name">Мужские Кроссовки Nike Air Max 270</p>
              <b className="drawer__cart-prise">12 999 руб.</b>
            </div>
            <img className="drawer__cart-remove" src="/img/remove.svg" alt="remove" />
          </div>
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