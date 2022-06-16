import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
  setPageNumber: any;
}
const Pagination: FC<IProps> = ({ limit, itemsAmount, setPageNumber }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray = [];

  const navigate = useNavigate();

  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  return (
    <div>
      {pagesArray.map((page) => (
        <button
          key={`key${page}`}
          type="button"
          onClick={() => {
            setPageNumber(page);
            navigate(`?page=${page}`);
          }}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
