import React from "react";
import styles from "./gototop.module.css";
import {BsArrowRight} from "react-icons/bs";


function GotoTopButton() {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

  return (
    <div onClick={scrollToTop} className={`${styles.gotopbtn}`}>
      <span>
        go to Top{" "}
        <BsArrowRight style={{ fontWeight: "bold", marginLeft: "6px" }} />
      </span>
    </div>
  );
}

export default GotoTopButton;
