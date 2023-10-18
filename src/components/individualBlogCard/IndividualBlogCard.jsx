import React from "react";
import styles from "./IndividualBlogCard.module.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function IndividualBlogCard({ img, title,goto }) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(goto)
  };
  return (
    <Card
      onClick={handleNavigate}
      className={`mb-3 border-0 ${styles.imgwrapper}`}
    >
      <Card.Img
        style={{ height: "344px", width: "100%" }}
        className={`${styles.innerimg}`}
        variant="top"
        src={img}
        alt="img"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default IndividualBlogCard;
