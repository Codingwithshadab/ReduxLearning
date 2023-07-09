import { BsFillBagFill } from "react-icons/bs";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const isLogin = localStorage.getItem("isLogin");
const user = JSON.parse(localStorage.getItem("user"));

const Header = () => {
  const navigate = useNavigate();
  const storeData = useSelector((state) => {
    return state;
  });
  const handleLogout = () => {
    localStorage.setItem("isLogin", false)
    navigate("/login");
  };
  return (
    <>
      <nav className="nav navWrap">
        <div className="container">
          <div className="navSec">
            <div className="logo">
              <NavLink to={"/"}>
                <strong className="text-white">Online Shop</strong>
              </NavLink>
            </div>
            <div className="navigation">
              <div className="menus">
                <ul className="menuList">
                  <li>
                    <NavLink to={"/movies"}>Movies</NavLink>
                  </li>
                  <li><NavLink to={"/todo"}>Todo</NavLink> </li>
                  <li><NavLink to={"/quiz"}>Quiz</NavLink> </li>
                  <li><NavLink to={"/contact-list"}>Contact List</NavLink> </li>
                  <li><NavLink to={"/interview"}>React Interviews</NavLink> </li>
                  <li>
                    {isLogin ? (
                      <span
                        className="text-white logout"
                        onClick={handleLogout}
                      >
                        Logout
                      </span>
                    ) : (
                      <NavLink to={"/login"}>Login</NavLink>
                    )}
                  </li>
                </ul>
              </div>
              <div className="userName">
                <NavLink
                  to="/profile"
                  className="text-warning text-decoration-underline text-uppercase"
                >
                  {user.name}
                </NavLink>
              </div>
              <div className="cart">
                <NavLink to={"/cart"}>
                  <BsFillBagFill />
                  <span className="num">{storeData.value.length}</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
