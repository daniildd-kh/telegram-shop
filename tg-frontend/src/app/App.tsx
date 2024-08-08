import { useEffect } from "react";
import Header from "../components/header/Header";
import { useTelegram } from "../hooks/useTelegram";
import { NavLink, Outlet } from "react-router-dom";
import styles from './app.module.css'

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  const onClickMainButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <NavLink to="form">форма</NavLink>
        <NavLink to='product-list'>Каталог</NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default App;
