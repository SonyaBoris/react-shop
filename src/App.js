import React from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Shapka from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://644ba3984bdbc0cc3a967dcc.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://644ba3984bdbc0cc3a967dcc.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    if(cartItems.find((item) => item.id === obj.id)){
      setCartItems(prev => prev.filter(item => item.id !== obj.id));
    }else{
      axios.post('https://644ba3984bdbc0cc3a967dcc.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
    }    
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://644ba3984bdbc0cc3a967dcc.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}

      <Shapka onClickCart={() => setCartOpened(true)} />     

      <div className="content">
        <div className="content__top">
          <h1 className="content__title"> {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'} </h1>
          <div className="search">
            {searchValue && <img
              onClick={() => setSearchValue('')}
              className="search__clear"
              src="/img/remove.svg"
              alt="clear" />}
            <img src="/img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}             
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
