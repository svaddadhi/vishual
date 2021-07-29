import React from "react";
import { Row, Col, Card } from "antd";
import styles from "./landingPageBody.module.css";
import { Fragment } from "react/cjs/react.production.min";
import bigImage from "../../images/bigImage.jpg";

const LandingPageBody = () => {
  return (
    <Fragment>
      <Row className={styles.mainRow}>
        <Col>
          <Row>
            <Card className={styles.cardBackground}>
              <h1 className={styles.title}>Tasteful. Clean. Refreshing</h1>
              <h1 className={styles.vishual}>Vishual</h1>
              <hr className={styles.breakLine} />
            </Card>
          </Row>

          <Row>
            <Card className={styles.cardBackground}>
              <h4 className={styles.subText}>
                Photography deals exquisetly with appearances <br /> but nothing
                is what it appears to be
              </h4>
            </Card>
          </Row>
        </Col>
        <Col>
          <img src={bigImage} className={styles.bigImage} alt="bigImage" />
        </Col>
      </Row>
    </Fragment>
  );
};

export default LandingPageBody;
