const Card = () => {
  return (
    <div className="card">
      <div className="card__like">
        <img src="/img/unlike.svg" alt="unlike" />
      </div>

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
  );
}

export default Card;