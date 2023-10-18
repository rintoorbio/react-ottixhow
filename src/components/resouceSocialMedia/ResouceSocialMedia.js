import React from "react";
import styles from "./resourcesocialmedia.module.css"

function ResouceSocialMedia() {
  return (
    <div style={{ background: "#f6f6f6", padding: "26px", width: "100%" }}>
      <h6>SOCIAL MEDIA</h6>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={`${styles.videolink}`}>
          <a href="https://www.instagram.com/ottixhow/">
            <video
              style={{ height: "auto", width: "195px", margin: "12px" }}
              src="//ottixhow.com/wp-content/uploads/2023/08/www.ottixhow.comt-1-1.mp4"
              preload="metadata"
            ></video>
          </a>
        </div>
        <div className={`${styles.videolink}`}>
          <a href="https://www.instagram.com/ottixhow/">
            <video
              style={{ height: "auto", width: "195px", margin: "12px" }}
              src="//ottixhow.com/wp-content/uploads/2023/08/www.ottixhow.comt-1-1.mp4"
              preload="metadata"
            ></video>
          </a>
        </div>
        <div className={`${styles.videolink}`}>
          <a href="https://www.instagram.com/ottixhow/">
            <video
              style={{ height: "auto", width: "195px", margin: "12px" }}
              src="//ottixhow.com/wp-content/uploads/2023/08/Competitor-Analysis.mp4"
              preload="metadata"
            ></video>
          </a>
        </div>
        <div className={`${styles.videolink}`}>
          <a href="https://www.instagram.com/ottixhow/">
            <video
              style={{ height: "auto", width: "195px", margin: "12px" }}
              src="//ottixhow.com/wp-content/uploads/2023/08/www.ottixhow.comt_.mp4"
              preload="metadata"
            ></video>
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center",marginTop:"15px" }}>
        <a href="https://www.instagram.com/ottixhow/">
          <button
            className={`${styles.followbtn}`}
          >
            Follow Me
          </button>
        </a>
      </div>
    </div>
  );
}

export default ResouceSocialMedia;
