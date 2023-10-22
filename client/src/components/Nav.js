import React from "react";

const Nav = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
  };

  return (
    <div class="nav justify-content-center container fs-5#6">
      <ul class="nav nav-underline">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/posting">
            Posting
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact-us">
            Contact Us
          </a>
        </li>
        <li class="nav-item">
          <a onClick={logoutHandler} class="nav-link text-danger" href="/login">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
