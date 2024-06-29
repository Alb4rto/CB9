import styles from "./Layout.module.scss";
import { useEffect, useState } from "react";
import { AUTH_KEY } from "../../../constant";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
export const globalContext = createContext();

const Layout = () => {
  const [cardList, setCardList] = useState([]);
  const value = { cardList };
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${AUTH_KEY}&per_page=30`)
      .then((res) => res.json())
      .then((data) => setCardList(data));
  }, []);
  return (
    <>
      <globalContext.Provider value={value}>
        <Outlet />
      </globalContext.Provider>
    </>
  );
};

export default Layout;
