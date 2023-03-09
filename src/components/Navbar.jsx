import React, { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleViewportChange() {
    const navbar = document.getElementById("nav-bar");
    const logo = document.getElementById("logo");
    const linkTextList = Array.from(
      document.getElementsByClassName("link-text")
    );

    if (window.innerWidth < 640) {
      navbar.classList = "nav-none";
    } else if (window.innerWidth < 1600) {
      navbar.classList = "nav-minimized";
      logo.classList = "display-n";
      linkTextList.forEach((l) => (l.classList = "link-text display-n"));
    } else {
      navbar.classList = "";
      logo.classList = "display-b";
      linkTextList.forEach((l) => (l.classList = "link-text display-b"));
    }
  }

  const handleNavbar = () => {
    const navbar = document.getElementById("nav-bar");
    const logo = document.getElementById("logo");
    const linkTextList = Array.from(
      document.getElementsByClassName("link-text")
    );

    if (
      navbar.classList === "nav-none" ||
      navbar.classList === "nav-minimized"
    ) {
      navbar.classList = "";
      logo.classList = "display-b";
      linkTextList.forEach((l) => (l.classList = "link-text display-b"));
    } else if (window.innerWidth < 1600) {
      navbar.classList = "nav-minimized";
      logo.classList = "display-n";
      linkTextList.forEach((l) => (l.classList = "link-text display-n"));
    } else {
      navbar.classList = "nav-none";
    }
  };

  useEffect(() => {
    handleViewportChange();
    window.addEventListener("resize", handleViewportChange);

    return () => window.removeEventListener("resize", handleViewportChange);
  }, []);

  return (
    <div id="nav">
      <nav id="nav-bar">
        <span id="logo">Wellspring</span>
        <ul>
          <li>
            <span className="icon" data-icon="home"></span>
            <span className="link-text">Home</span>
          </li>
          <li>
            <span className="icon" data-icon="patients"></span>
            <span className="link-text">Patients</span>
          </li>
          <li>
            <span className="icon" data-icon="employees"></span>
            <span className="link-text">Employees</span>
          </li>
          <li>
            <span className="icon" data-icon="clinical"></span>
            <span className="link-text">Clinical</span>
          </li>
          <li>
            <span className="icon" data-icon="resources"></span>
            <span className="link-text">Resources</span>
          </li>
          <li>
            <span className="icon" data-icon="settings"></span>
            <span className="link-text">Settings</span>
          </li>
        </ul>
      </nav>
      <button id="btn-menu" onClick={() => handleNavbar()}>
        <span id="menu-icon"></span>
      </button>
    </div>
  );
}

export default Navbar;
