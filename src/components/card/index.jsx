import { Badge, Button, Card } from "react-bootstrap";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const PostCard = ({
  title,
  detail,
  image,
  publishAt,
  category,
  btnText,
  id,
}) => {
  const router = useNavigate();
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleClick = () => {
    router(`/post/${id}`);
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" className={styles.cardImage} src={image} />
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Badge bg="dark" className="me-2">
            {category}
          </Badge>
          <Badge bg="dark" className="me-2">
            {publishAt}
          </Badge>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{truncateText(detail, 150)}</Card.Text>
        <Button variant="dark" className="w-100" onClick={handleClick}>
          {btnText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
