import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import smallIcon from "../../images/smallIcon.jpg";
import styles from "./navbar.module.css";

const NavBar = ({ page1, page2, page3 }) => {
  return (
    <div className={styles.navBarStyles}>
      <img className={styles.menuIcon} src={smallIcon} alt="menuIcon" />
      <Card className={styles.navBarCardStyles}>
        <Row className={styles.mainRowStyle}>
          <Col>
            <h3 className={styles.menuText}>
              <Link to="/portfolio"> Portfolio</Link>
            </h3>
          </Col>
          <Col>
            <h3 className={styles.menuText}>
              <Link to="/about">About</Link>
            </h3>
          </Col>
          ]
          <Col>
            <h3 className={styles.menuText}>
              <Link to="/contact">Contact Me</Link>
            </h3>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default NavBar;
