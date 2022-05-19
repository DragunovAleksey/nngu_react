import React from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import ItemsList from '../ItemsList';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <MainLayout>
      <div className={style.page_wrapper}>
        <ItemsList />
      </div>
    </MainLayout>
  );
};

export default MainPage;
