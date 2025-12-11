import React, { useState } from "react";
import "./sideMenu.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem";

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>
      <ul className="social">
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              "https://neetujangid2004.onrender.com/#"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              "Check this website: https://neetujangid2004.onrender.com/#"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              "https://neetujangid2004.onrender.com/#"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="share"
            onClick={(e) => {
              e.preventDefault();

              const shareData = {
                title: "Play Games Website",
                text: "Check this website:",
                url: "https://neetujangid2004.onrender.com/#",
              };

              if (navigator.share) {
                navigator.share(shareData).catch((err) => {
                  console.log("Share failed:", err);
                });
              } else {
                alert("Your device does not support sharing. 😢");
              }
            }}
          >
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
