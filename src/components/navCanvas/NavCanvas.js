import React from 'react'
import styles from "./navcanvas.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import NavLeftItem from '../navLeftitem/NavLeftItem';
import NavRightItem from '../navRightItem/NavRightItem';

function NavCanvas({showCanvas,setShowCanvas}) {
  
  
  const fullscreen = true

  return (
    <div>
      <Modal show={showCanvas} fullscreen={fullscreen} onHide={() => setShowCanvas(false)}>
    <div>
      <Container fluid>
        <Row className={styles.row}>
            <Col className={styles.leftCol}>
                <NavLeftItem setShowCanvas={setShowCanvas} />
            </Col>
            <Col className={`${styles.rightCol} ${styles.hidesmallscreen}`}>
                <NavRightItem setShowCanvas={setShowCanvas} />
            </Col>
        </Row>
      </Container>
    </div>
    </Modal>

    </div>
  )
}

export default NavCanvas