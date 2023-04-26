import Card from './components/Card'
import Drawer from './components/Drawer';
import Shapka from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Shapka />
      <div className="content">
        <div className="content__top">
          <h1 className="content__title">Все кросовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <Card />


        </div>

      </div>
    </div>
  );
}

export default App;
