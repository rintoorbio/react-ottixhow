import React, { useState, useEffect } from "react";
import { Col, Dropdown, Nav, Navbar } from "react-bootstrap";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

import { CgMenuGridO } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import NavCanvas from "../navCanvas/NavCanvas";
import HomeCanvas from "../homeCanvas/HomeCanvas";

function NavBar() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [navbarClass, setNavbarClass] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarClass(`${styles.scrolled}`);
      } else {
        setNavbarClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HomeCanvas
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <NavCanvas setShowCanvas={setShowCanvas} showCanvas={showCanvas} />
      <Navbar
        expand="lg"
        className={`position-fixed ${navbarClass}`}
        style={{ width: "100%", zIndex: 100, color: "white", padding: "20px" }}
      >
        <Col lg={4}>
          <NavLink to="/">
            <img
              src="/assets/OttixhowLogo.WebP"
              className={`d-inline-block align-top ${styles.logoimg}`}
              alt="logo"
            />
          </NavLink>
        </Col>

        <Col lg={6}>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item style={{ marginRight: "25px" }}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navlink} ${isActive ? `${styles.active}` : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item style={{ marginRight: "25px" }}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navlink} ${isActive ? `${styles.active}` : ""}`
                  }
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </Nav.Item>
              <Nav.Item style={{ marginRight: "25px" }}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navlink} ${isActive ? `${styles.active}` : ""}`
                  }
                  to="/resources"
                >
                  Resources
                </NavLink>
              </Nav.Item>
              <Dropdown
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={toggleDropdown}
              >
                <NavLink
                  style={{ marginRight: "25px" }}
                  className={`${styles.navlink}`}
                >
                  Features
                </NavLink>
                <Dropdown.Menu
                  style={{ minWidth: "220px", padding: "20px" }}
                  className={`${styles.dropdownNav}`}
                >
                  <Nav.Item style={{ marginBottom: "10px" }}>
                    <NavLink to="/competitor-analysis"
                    className={({ isActive }) =>
                      `${isActive ? `${styles.active}` : ""}`
                    }
                    >
                      Competitor Analysis
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item style={{ marginBottom: "10px" }}>
                    <NavLink to="/sales-analysis"
                    className={({ isActive }) =>
                      `${isActive ? `${styles.active}` : ""}`
                    }
                    >Sales Analysis</NavLink>
                  </Nav.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item style={{ marginRight: "25px" }}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navlink} ${isActive ? `${styles.active}` : ""}`
                  }
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Col>

        <Col lg={2}>
          <div className={`${styles.toggleIconend}`}>
            <CgMenuGridO
              style={{ color: "white" }}
              onClick={() => {
                setShow(true);
              }}
              className={`d-none d-lg-flex ${styles.cursor}`}
              size={25}
            />
            <FiMenu
              onClick={() => {
                setShowCanvas(true);
              }}
              style={{ color: "white" }}
              size={25}
              className={`d-lg-none d-md-flex ${styles.cursor}`}
            />
          </div>
        </Col>
      </Navbar>
    </>
  );
}

export default NavBar;
