import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-flexbox-grid'; 

const OrderSummary = props => (
  <h2 className={styles.component}>
    Total: <strong>12,394</strong>
  </h2>
);

export default OrderSummary;