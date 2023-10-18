import Card from "react-bootstrap/Card";
import "./blogcard.css";
import { useNavigate } from "react-router-dom";

function BlogCards({ title, img, goto }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(goto);
  };
  return (
    <>
      <Card onClick={handleNavigate} className="mb-3 img-wrapper border-0">
        <Card.Img className="inner-img" variant="top" src={img} alt="img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default BlogCards;
