import React from 'react';
import s from './Card.module.css';

const Card = ({onLike, title, imageUrl, price, onPlus}) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded);
  }

  return (
    <div className={s.card}>
      <div className={s.like} onClick={onLike}>
        <img src="/img/unlike.svg" alt="unlike" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className={s.bottom}>
        <div className="prise">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <img className={s.plus} onClick={onClickPlus} width={32} height={32} src={isAdded ? '/img/btnChecked.svg' : "/img/plus.svg"} alt="plus" />
      </div>
    </div>
  );
}

export default Card;