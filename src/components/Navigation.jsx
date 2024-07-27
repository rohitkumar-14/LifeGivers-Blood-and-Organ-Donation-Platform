import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/users/getCurrentUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserName(data.name);
        } else {
          // Handle the case where the user data could not be retrieved
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
      }
    };

    if (isLoggedIn) {
      fetchUserName();
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

 
  return (
    <header class="main_menu home_menu">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <Link class="navbar-brand text-white" to="/">
              LifeGivers.
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="ti-menu"></span>
              </button>
              <div
                class="collapse navbar-collapse main-menu-item justify-content-end"
                id="navbarSupportedContent">
                <ul class="navbar-nav align-items-center">
                  {!isLoggedIn ? (
                    <>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/details">
                          Details
                        </Link>
                      </li>
                    
                    
                      <li class="d-none d-lg-block">
                        <Link class="btn_2" to="/login">
                          Login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li  style={{color :"white",fontSize: "18px"}}>Welcome, {userName}</li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/details">
                          Details
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="blog.html"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          Blood
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item" to="/register-blood-donor">
                          Register Blood Donor
                          </Link>
                          <Link class="dropdown-item" to="/register-blood-bank">
                          Register Blood Bank
                          </Link>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="blog.html"
                          id="navbarDropdown_1"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          Organ
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown_1">
                          <Link class="dropdown-item" to="/register-organ-donor">
                          Register Organ Donor
                          </Link>
                          <Link class="dropdown-item" to="/register-hospital">
                          Register Hospital
                          </Link>
                        </div>
                      </li>

                      <li class="d-none d-lg-block">
                        <Link class="nav-link" to="/register-patient">
                        Register Patient
                        </Link>
                      </li>
                      <li class="d-none d-lg-block">
                        <Link class="nav-link" to="/profile">
                        Profile
                        </Link>
                      </li>
                      <li class="d-none d-lg-block">
                        <a class="btn_2" onClick={() => { handleLogout()}} href="#">
                          Logout
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
