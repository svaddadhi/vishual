import React from "react";
import { Row, Col } from "antd";
import bottomLeftLeaf from "../../images/bottomLeftLeaf.png";
import placeholder from "../../images/placeholder.jpg";
import styles from "./aboutPageBody.module.css";

const AboutPageBody = () => {
  return (
    <div>
      <Row className={styles.mainRow}>
        <Col>
          <Row>
            <h1 className={styles.aboutHeading}>About</h1>
          </Row>
          <Row>
            <p className={styles.aboutDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Row>
        </Col>
        <Col>
          <img
            className={styles.aboutImage}
            src={placeholder}
            alt="aboutImage"
          />
        </Col>
      </Row>
      <img className={styles.leafImage} src={bottomLeftLeaf} alt="leaf" />
    </div>
  );
};

export default AboutPageBody;
