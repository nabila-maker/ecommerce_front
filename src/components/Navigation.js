import React from "react";
import { Link, useNavigate } from "react-router-dom";
import rose from "../assets/img/rose.png";
import user from "../assets/img/user.png";
import "../pages/Signup";
import "../styles/components/navigation.scss";
import { useDispatch } from "react-redux";
import { logout } from "../store/user.reducer";

function Navigation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Link to="/">
        <img className="logo" src={rose} alt="logo" />
      </Link>
      <div className="title"> MySkincare</div>
      <div className="user-image">
        <Link to="/signup">
          <img src={user} alt="user" />
        </Link>
        <Link to="/reservation">
        <img className="logo" src={rose} alt="logo" />
      </Link>
      </div>
      <button
        exact
        to="/Logout"
        className="nav-active"
        onClick={() => {
          localStorage.removeItem("User");
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navigation;
