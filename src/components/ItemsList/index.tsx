import React, { useState } from 'react';
import style from './ItemsList.module.scss';
import Button from '../../shared/Button';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);

  const [name, setName] = useState('');

  const handleAddItemToChaart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={style.items_list__wrapper}>
      <div>
        <p>{chartItemsAmount ? `Количество товаров: ${chartItemsAmount}` : 'корзина пуста'}</p>

        {chartItemsAmount === 5 && <p>Корзина заполнена!</p>}
        <Button btnText="Добавить в корзину" handleClick={handleAddItemToChaart} />
        <Button btnText="1" handleClick={handleAddItemToChaart} />
        <Button handleClick={handleAddItemToChaart} />
      </div>

      <div>
        <p>{name || 'укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
