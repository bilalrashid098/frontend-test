import React from "react";
import { Card, Col, Placeholder, Row } from "react-bootstrap";
import styles from "./index.module.css";

const LoaderDetail = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col md={10}>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={2} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} size="lg" />
          </Placeholder>

          <div className={`placeholderImg my-5 ${styles.placeholderImg}`}></div>

          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div
                className={`me-3 avatarPlaceholder ${styles.avatar}`}
              ></div>
              <div style={{ width: "200px" }}>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
                </Placeholder>
              </div>
            </div>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={1} /> <Placeholder xs={1} />{" "}
            </Placeholder>
          </div>

          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={8} />
          </Placeholder>
        </Col>
      </Row>
    </>
  );
};

export default LoaderDetail;
