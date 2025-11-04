import React, { useContext, useState } from "react";
import "./header.css";
import userImg from "../images/user.jpg";
import { AppContext } from "../App";

function Header({ toggleActive }) {
  const { library, bag } = useContext(AppContext);
  const [userName, setUserName] = useState("User Name");

  // function to handle avatar click
  const handleAvatarClick = () => {
    const newName = prompt("Enter your username:");
    if (newName && newName.trim() !== "") {
      setUserName(newName.trim());
    }
  };

  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div
          className="avatar"
          onClick={handleAvatarClick}
          style={{ cursor: "pointer" }}
        >
          <a href="#">
            <img src={userImg} alt="User Image" />
          </a>
          <div className="user">
            <span>{userName}</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
