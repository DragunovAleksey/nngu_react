import React, { FC } from 'react';
import style from './Item.module.scss';

interface Iitem {
  name: string;
  description: string;
}

const Item: FC<Iitem> = (props: any) => {
  const { name, description } = props;

  console.log('НАЗВАНИЕ', name);
  console.log('ОПИСАНИЕ', description);

  return (
    <div className={style.item_container}>
      <p>{name}</p>
      <p>Описание:</p>
      <p>{description}</p>
    </div>
  );
};
export default Item;
