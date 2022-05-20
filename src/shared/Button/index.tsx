import React, { FC } from 'react';
import style from './button.module.scss';

interface IButton {
  btnText?: string;
  handleClick: () => void;
}
const Button: FC<IButton> = ({ btnText, handleClick }) => {
  return (
    <button type="button" className={style.button} onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  btnText: 'дефолтное значение',
};
