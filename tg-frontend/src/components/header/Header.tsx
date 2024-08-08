import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import styles from './header.module.css'
import Button from '../button/Button';

const Header = () => {
  const {tg, user} = useTelegram();

  const onCloseBtn = () =>{
    tg.close();
  }
  
  return (
    <nav>
      <ul className={styles.headerMenu}>
        <li className={styles.menuItem}>
          Главная
        </li>
        <li className={styles.menuItem}>
          Каталог
        </li>
        <li className={styles.menuItem}>
          <Button>
            Закрыть
            </Button>
        </li>
      </ul>
      <div>
        <p>
          {user?.username}
        </p>
      </div>
    </nav>
  );
};

export default Header;