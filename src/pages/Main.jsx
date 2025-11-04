import React, { useState, useEffect, useRef, useContext } from "react";
import "./main.css";
import SideMenu from "../components/SideMenu";
import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import MyLibrary from "./MyLibrary";
import Bag from "./Bag";
import { AppContext } from "../App";

function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  // ✅ Define refs
  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const libraryRef = useRef(null);
  const bagRef = useRef(null);

  // ✅ Toggle side menu
  const handelToggleActive = () => {
    setActive(!active);
  };

  // ✅ Handle section switching
  const handleSectionActive = (target) => {
    const allSections = [homeRef, categoriesRef, libraryRef, bagRef];
    allSections.forEach((ref) => {
      if (ref.current) ref.current.classList.remove("active");
    });

    const targetRef = {
      home: homeRef,
      categories: categoriesRef,
      library: libraryRef,
      bag: bagRef,
    }[target];

    if (targetRef?.current) targetRef.current.classList.add("active");
  };

  // ✅ Fetch game data
  const fetchData = () => {
    fetch("http://localhost:3000/api/gamesData.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header toggleActive={handelToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <MyLibrary games={library} reference={libraryRef} />
              <Bag games={bag} reference={bagRef} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
