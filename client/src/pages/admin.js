import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components
import AdminProduct from '../components/adminProduct';

function Admin() {

  const [name, setName] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [chasisNum, setChasisNum] = useState('');
  const [year, setYear] = useState('');
  const [stock, setStock] = useState('');

  const [showModal, setShowModal] = useState(false);


  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      // Handle any logic needed when the modal is shown
    }
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carPayload = {
      name: name,
      make: make,
      model: model,
      chasisNum: chasisNum,
      year: year,
      stock: stock,
      price: price
    };

    try {
      // Use axios to post car data
      const carResponse = await axios.post('http://localhost:3001/api/Cars', carPayload);
      console.log('Car post successfully submitted:', carResponse.data);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setShowModal(true)}>
        New Product
      </Button>

      <AdminProduct />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form submit={handleSubmit}>
            <div className="form-group">
              <Row className='mb-3'>
                <Col>
                  <label htmlFor="name">Name:</label>
                  <input className="form-control"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col>
                  <label htmlFor="make">Make:</label>
                  <input className="form-control"
                    type="text"
                    id="make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                  />
                </Col>

                <Col>
                  <label htmlFor="model">Model:</label>
                  <input className="form-control"
                    type="text"
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col>
                  <label htmlFor="year">Year:</label>
                  <input className="form-control"
                    type="text"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </Col>

                <Col>
                  <label htmlFor="chasisNum">Chasis Number:</label>
                  <input className="form-control"
                    type="text"
                    id="chasisNum"
                    value={chasisNum}
                    onChange={(e) => setChasisNum(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col>
                  <label htmlFor="stock">Stock:</label>
                  <input className="form-control"
                    type="text"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
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
    </>
  );
}

export default Admin;