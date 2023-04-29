import React from "react";
import s from './Drawer.module.css';


const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className={s.overlay}>
      <div className={s.drawer}>
        <div className={s.top}>
          <h2 className={s.title}>Корзина</h2>
          <img onClick={onClose} className={s.close} width={32} height={32} src="/img/remove.svg" alt="закрыть корзину" />
        </div>

        {
          items.length > 0 ? (
            <>
              <div className={s.items}>
                {items.map((obj) => (
                  <div key={obj.id} className={s.item}>                    
                    <img width={113} height={92} src={obj.imageUrl} alt="кросовки" />                    
                    <div className={s.info}>
                      <p className={s.name}>{obj.title}</p>
                      <b className={s.price}>{obj.price}</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)} className={s.close} src="/img/remove.svg" alt="remove" />
                  </div>
                ))}
              </div>
              <ul className={s.itogo}>
                <li className={s.li}>
                  <span>Итого :</span>
                  <div className={s.line}></div>
                  <b>21 498 руб.</b>
                </li>
                <li className={s.li}>
                  <span>Налог 5% :</span>
                  <div className={s.line}></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button>Оформить заказ</button>
            </>

          ) : (
            <div className={s.empty}>
              <img src="/img/emptyCart.jpg" alt="пустая корзина" />
              <h2>Корзина пустая</h2>
              <p className={s.emptyParagraph}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className={s.emptyButton}>
                <img className={s.buttonImg} src="/img/vectorL.svg" alt="вернуться назад" />
                <div>Вернуться назад</div>
              </button>
            </div>
          )
        }



      </div>
    </div>
  );
}

export default Drawer;