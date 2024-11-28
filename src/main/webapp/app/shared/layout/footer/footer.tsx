import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row style={{padding: "0.9rem"}}>
      <Col md="12" style={{
        backgroundColor: '#fff', 
        fontWeight: 'bold',
        fontSize: 12,
        alignItems: 'center'}} className='wrapper'>
          <span>Thiết kế web/app mobile: Mr. Huy</span>
          <Row>
            <Col>Email: tranhuyteach@gmail.com</Col>
          </Row>
          <Row>
            <Col>Phone: 0968 335 026</Col>
          </Row>
      </Col>
    </Row>
  </div>
);

export default Footer;
