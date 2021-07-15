import React from 'react';
import { Menu, Row } from 'antd';
import styles from "./navbar.module.css"

const NavBar = () => {
    return (
        <Row>
            <Menu style={{ backgroundColor: "black" }}  mode="horizontal" >
                <Menu.Item key="portfolio" className={styles.itemColors}>Portfolio</Menu.Item>
                <Menu.Item key="about" className={styles.itemColors}>About</Menu.Item>
                <Menu.Item key="contact" className={styles.itemColors}>Contact Me</Menu.Item>
            </Menu>
        </Row>

    )
}

export default NavBar;