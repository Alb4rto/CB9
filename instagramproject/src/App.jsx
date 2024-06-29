import { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/cards/Cards";
import "./App.css";
import { globalContext } from "./components/Layout/Layout";

function App() {
  const { cardList } = useContext(globalContext);
  return (
    <main>
      <NavBar />
      <Cards list={cardList} />
    </main>
  );
}

export default App;
