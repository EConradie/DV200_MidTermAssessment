import React from 'react';

// Bootstrap
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import Checkout from '../components/checkout';

function checkout() {

  return (
    <>
      <Checkout />

      <Button onClick={() => {
        sessionStorage.removeItem('selectedProducts');
        window.location.reload();
      }}>
        Clear Cart
      </Button>
    </>
  );
}

export default checkout;