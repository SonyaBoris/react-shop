import React from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Shapka from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://644ba3984bdbc0cc3a967dcc.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Shapka onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__top">
          <h1 className="content__title">Все кросовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onLike={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
