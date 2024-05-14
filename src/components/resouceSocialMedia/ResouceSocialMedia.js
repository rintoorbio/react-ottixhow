import React from "react";
import styles from "./resourcesocialmedia.module.css"

function ResouceSocialMedia() {

  const socialMedias = [
    {id:'0',url:"/assets/video/historical-price.mp4"},
    {id:'1',url:"/assets/video/historical-price.mp4"},
    {id:'2',url:"/assets/video/competitor-analysis.mp4"},
    {id:'3',url:"/assets/video/automatic-product-mapping.mp4"},
  ]

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
        {
          socialMedias?.map((obj)=>(
            <div className={`${styles.videolink}`} key={obj.id}>
          <a href="https://www.instagram.com/ottixhow/" target="_blank" rel="noopener noreferrer">
            <video
              autoPlay muted loop
              style={{ height: "auto", width: "195px", margin: "12px" }}
              src={obj.url}
              preload="metadata"
            ></video>
          </a>
        </div>
          ))
        }
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
