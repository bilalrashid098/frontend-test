import React from "react";
import { Card, Col, Placeholder } from "react-bootstrap";
import styles from "./index.module.css";

const LoaderHome = () => {
  return (
    <>
      {Array(9)
        .fill(null)
        ?.map((_, index) => {
          return (
            <Col md={4} key={index}>
              <Card className={styles.card}>
                <div className="placeholderImg"></div>
                <Card.Body>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} /> <Placeholder xs={3} />{" "}
                  </Placeholder>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={12} />
                    <Placeholder xs={12} />
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="dark" xs={12} />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </>
  );
};

export default LoaderHome;
