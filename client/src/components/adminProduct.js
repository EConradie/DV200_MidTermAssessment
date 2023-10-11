import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

function AdminProduct() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/Cars'); // Adjust the URL as needed
        setProducts(response.data); // Update the products state with the fetched data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []);

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
      <Row className='product-container d-flex align-items-center'>
        <Col xs={2} className='text-center'>
          <p>Product Name</p>
        </Col>

        <Col xs={2} className='text-center'>
          <p>Car Make</p>
        </Col>

        <Col xs={2} className='text-center'>
          <p>Car Model</p>
        </Col>

        <Col xs={1} className='text-center'>
          <p>Year</p>
        </Col>

        <Col xs={2} className='text-center'>
          <p>Chasis Nr</p>
        </Col>


        <Col xs={1} className='text-center'>
          <p>Stock</p>
        </Col>

        <Col xs={1} className='text-end'>
          <p>Update</p>
        </Col>

        <Col xs={1} className='text-end'>
          <p>Delete</p>
        </Col>
      </Row>

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
