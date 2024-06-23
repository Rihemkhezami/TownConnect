import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarAdmin = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const sidebarRef = useRef();
  const navUsersRef = useRef();
  const navServicesRef = useRef();
  const navNotValidRef = useRef();
  const navCategories = useRef();

  useEffect(() => {
    if (location.pathname === "/admin-users")
      navUsersRef.current.classList.add("active");
    else if (location.pathname === "/admin-all-services")
      navServicesRef.current.classList.add("active");
    else if (location.pathname === "/admin-not-valid")
      navNotValidRef.current.classList.add("active");
    else if (location.pathname === "/admin-categories")
      navCategories.current.classList.add("active");
  }, [location.pathname]);

  // **** Disconnect ****/
  const disconnectClick = (e) => {
    localStorage.removeItem("userInfo");
    navigate("/login-register");
  };

  return (
    <Sidebar>
      <div ref={sidebarRef} className="sidebar">
        <div style={{paddingLeft:"20px",paddingTop:"7px"}} className="image-ext">
          <img style={{}} src="/images/logo.png"  width={200} alt="logo"/>
        </div>

        <div className="menu">
          <Link ref={navUsersRef} className="link" to="/admin-users">
            <i className="fa-solid fa-users"></i>
            <span className="nav-text">Utilisateurs</span>
          </Link>

          <Link ref={navServicesRef} className="link" to="/admin-all-services">
            <i className="fa-solid fa-bell-concierge"></i>
            <span className="nav-text">Services</span>
          </Link>

          <Link ref={navNotValidRef} className="link" to="/admin-not-valid">
            <i className="fa-solid fa-clock"></i>
            <span className="nav-text">Non validé</span>
          </Link>

          <Link ref={navCategories} className="link" to="/admin-categories">
            <i className="fa-solid fa-grip"></i>
            <span className="nav-text">Les categories</span>
          </Link>
        </div>
      </div>
      <div className="log-out">
        <i className="uil uil-signout"></i>
        <div onClick={disconnectClick}>
          <li>Se déconnecter</li>
        </div>
      </div>
    </Sidebar>
  );
};

export const Sidebar = styled.div`
  position: fixed;
  border-radius: 20px;
  left: 10px;
  top: 90px;
  height: 75vh;
  width: 250px;
  background-color:#FFFFFF;
  .image-text {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 20px;
    gap: 10px;
    .image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .text {
      color: #fff;
      font-size: 20px;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    .link {
      text-decoration: none;
     // color: #fff;
      color:#5C5C5C ;
      padding: 15px 0 15px 20px;
      &.active {
        background-color:  #F0F8FF;
      }
      &:hover {
       // background-color: #D9F4FF;
        background-color:   #F0F8FF;
      }
      i {
        margin-right: 10px;
        font-size: 20px;
      }
      .nav-text {
        font-size: 18px;
      }
    }
  }
  .log-out {
    display: flex;
    left: 40%;
    transform: translateX(-50%);
    gap: 10px;
    position: absolute;
    bottom: 30px;
    border: 1px solid #fff;
    width: 180px;
    padding: 5px 10px;
    border-radius: 20px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #D9F4FF;
      border-color: #D9F4FF;
    }
    i {
      color: #5C5C5C;
    }
    li {
      list-style-type: none;
      color: #5C5C5C;
    }
  }
`;

export default SidebarAdmin;
