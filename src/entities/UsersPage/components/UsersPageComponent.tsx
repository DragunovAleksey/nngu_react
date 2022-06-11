import React, { FC, useState } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 3;
  const lastIndex = pageNumber * limit;
  const firstIndex = lastIndex - limit;
  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {usersDataAttr.length ? (
          usersDataAttr.slice(firstIndex, lastIndex).map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
        <Pagination
          limit={limit}
          itemsAmount={usersDataAttr.length}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default UsersPageComponent;

