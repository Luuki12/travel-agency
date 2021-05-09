import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-flexbox-grid';
import styles from './OrderForm.scss';

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>
);

OrderForm.propTypes = {

};

export default OrderForm;