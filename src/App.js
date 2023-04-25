function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/img/logo.png" width={40} height={40} />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>магазин лучших кросовок</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
              <img src="/img/cart.svg" alt="" />

              <span>1205 руб.</span>
            </li>
            <li>
              <img src="/img/user.svg" alt="" />
            </li>
          </ul>
        </div>

      </header>
      <div className="content">
        <h1 className="content__title">Все кросовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sn1.jpg" alt="sneakers" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__bottom">
              <div className="card__prise">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sn2.jpg" alt="sneakers" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__bottom">
              <div className="card__prise">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sn3.jpg" alt="sneakers" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__bottom">
              <div className="card__prise">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/sn4.jpg" alt="sneakers" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__bottom">
              <div className="card__prise">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
