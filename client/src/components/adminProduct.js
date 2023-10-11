import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AdminProduct() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Brake Pads',
      make: 'Toyota',
      model: 'Corolla',
      year: '2010',
      chase: '123456789',
      stock: '10',
    },
    {
      id: 2,
      name: 'Oil Filter',
      make: 'Honda',
      model: 'Civic',
      year: '2015',
      chase: '987654321',
      stock: '15',
    },
    {
      id: 3,
      name: 'Spark Plugs',
      make: 'Ford',
      model: 'F-150',
      year: '2020',
      chase: '567891234',
      stock: '8',
    },
  ];

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (showModal) {
      // Handle any logic needed when the modal is shown
    }
  }, [showModal]);

  return (
    <>
      {products.map((product) => (
        <Row key={product.id} className='product-container d-flex align-items-center'>
          <Col xs={2} className='text-center'>
            <p>{product.name}</p>
          </Col>

          <Col xs={2} className='text-center'>
            <p>{product.make}</p>
          </Col>

          <Col xs={2} className='text-center'>
            <p>{product.model}</p>
          </Col>

          <Col xs={1} className='text-center'>
            <p>{product.year}</p>
          </Col>

          <Col xs={2} className='text-center'>
            <p>{product.chase}</p>
          </Col>

          <Col xs={1} className='text-center'>
            <p>{product.stock}</p>
          </Col>

          <Col xs={1} className='text-end'>
            <Button variant="primary" onClick={() => handleUpdateClick(product)}>
              Update
            </Button>
          </Col>

          <Col xs={1} className='text-end'>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      ))}

      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder={selectedProduct.name} />
                  </Col>
                </Row>

                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="make">Car Make</label>
                    <input type="text" className="form-control" id="make" name="make" placeholder={selectedProduct.make} />
                  </Col>

                  <Col>
                    <label htmlFor="model">Car Model</label>
                    <input type="text" className="form-control" id="model" name="model" placeholder={selectedProduct.model} />
                  </Col>
                </Row>

                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="year">Car Year</label>
                    <input type="text" className="form-control" id="year" name="year" placeholder={selectedProduct.year} />
                  </Col>

                  <Col>
                    <label htmlFor="chase">Car Chase</label>
                    <input type="text" className="form-control" id="chase" name="chase" placeholder={selectedProduct.chase} />
                  </Col>
                </Row>

                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="stock">Stock</label>
                    <input type="text" className="form-control" id="stock" name="stock" placeholder={selectedProduct.stock} />
                  </Col>
                </Row>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal >
      )
      }
    </>
  );
}

export default AdminProduct;
