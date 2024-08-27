import Modal from "react-bootstrap/Modal";
import styles from "./index.module.css";
import { PiX } from "react-icons/pi";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function UserModal({ user, open, setOpen }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setOpen(false)}
      show={open}
      className={styles.modalWrapper}
    >
      <Modal.Body className={styles.modalBody}>
        <div className={styles.closeBtn} onClick={() => setOpen(false)}>
          <PiX size={30} />
        </div>
        <h4 className="mb-4">
          {user?.firstname} {user?.lastname}
        </h4>
        <p>Email: {user?.email}</p>
        <p>Birthday: {user?.birthDate}</p>
        <p>Phone: {user?.phone}</p>
        <p>Website: {user?.website}</p>
        <p>Company: {user?.company?.name}</p>
        <p>
          Address: {user?.address?.suite}, {user?.address?.street}
          {", "}
          {user?.address?.city}{" "}
        </p>
        <Row className="my-4">
          <Col md={6}>
            <Link to={`tel:${user?.phone}`}>
              <Button className="w-100 font-bold mb-3" variant="light">
                Phone
              </Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to={`mailto:${user?.email}`}>
              <Button className="w-100 font-bold mb-3" variant="light">
                Email
              </Button>
            </Link>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
