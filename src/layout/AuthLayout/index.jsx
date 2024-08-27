import { Col, Row } from "react-bootstrap";
import styles from "./index.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authContainer}>
      <Row className="w-100 h-100">
        <Col className="px-0" md={7}>
          <div className={styles.authBg}></div>
        </Col>
        <Col className="px-0" md={5}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className={styles.authForm}>{children}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
