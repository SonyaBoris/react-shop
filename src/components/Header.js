const Shapka = (props) => {
  return ( 
    <header>
        <div className="headerLeft">
          <img src="/img/logo.png" width={40} height={40} />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>магазин лучших кросовок</p>
          </div>
        </div>
        <div className="headerRight">
          <ul>
            <li onClick={props.onClickCart}>
              <img src="/img/cart.svg" alt="" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img src="/img/user.svg" alt="" />
            </li>
          </ul>
        </div>

      </header>
   );
}
 
export default Shapka;