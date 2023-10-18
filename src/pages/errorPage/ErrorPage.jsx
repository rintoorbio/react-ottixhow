import React from "react";
import styles from "./errorpage.module.css"
import { useNavigate } from "react-router-dom";
import FooterImgSection from "../../components/footerimg/FooterImg";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
    <div className={`${styles.errorContainer}`}>
      <h1 className={`${styles.headingClass}`}>404</h1>
      <span className={`${styles.spantag}`}>Oops...</span>
      <p className={`${styles.ptag}`}>
        We're sorry, but <br />
        something went wrong.
      </p>
      <button onClick={() => navigate("/")} className={`${styles.homebtn}`}>
        Homepage
      </button>
    </div>
    <FooterImgSection />
    </div>
  );
}

export default ErrorPage;
