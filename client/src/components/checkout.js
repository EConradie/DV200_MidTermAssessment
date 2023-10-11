import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';



function Checkout() {

    const [products, setProducts] = useState([]);

    const [showModal, setShowModal] = useState(false);

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

                <Col xs={2} className='text-center'>
                    <p>Quantity</p>
                </Col>

                <Col xs={1} className='text-center'>
                    <p>Price</p>
                </Col>

                
            </Row>
            {sessionStorage.getItem('selectedProducts') && JSON.parse(sessionStorage.getItem('selectedProducts')).length > 0 ?
                products.filter(product => JSON.parse(sessionStorage.getItem('selectedProducts')).includes(product._id)).map((product) => {
                    const selectedProductCount = JSON.parse(sessionStorage.getItem('selectedProducts')).filter(id => id === product._id).length;
                    return (

                        <Row key={product.id} className='product-container d-flex align-items-center white'>
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
                                <p>{product.chasisNum}</p>
                            </Col>

                            <Col xs={2} className='text-center'>
                                {selectedProductCount}
                            </Col>

                            <Col xs={1} className='text-center'>
                                <p>R{product.price * selectedProductCount}</p>
                            </Col>

                        </Row>
                    )
                }) : <p className='white'>Cart is empty</p>}

            {sessionStorage.getItem('selectedProducts') && JSON.parse(sessionStorage.getItem('selectedProducts')).length > 0 &&
                <Row className='total-price-container d-flex align-items-center'>
                    <Col xs={10}>
                        <Button variant="primary" onClick={() => setShowModal(true)}>Checkout</Button>
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Invoice</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {products.filter(product => JSON.parse(sessionStorage.getItem('selectedProducts')).includes(product._id)).map((product) => {
                                    const selectedProductCount = JSON.parse(sessionStorage.getItem('selectedProducts')).filter(id => id === product._id).length;
                                    product.stock -= selectedProductCount;
                                    // TODO: Update the product in the database
                                    return (
                                        <p>{product.name} x {selectedProductCount} = R{product.price * selectedProductCount}</p>
                                    )
                                })}
                                <p>Total Price: R{products.filter(product => JSON.parse(sessionStorage.getItem('selectedProducts')).includes(product._id)).reduce((total, product) => {
                                    const selectedProductCount = JSON.parse(sessionStorage.getItem('selectedProducts')).filter(id => id === product._id).length;
                                    return total + Number(product.price) * selectedProductCount;
                                }, 0)}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => {
                                    setShowModal(false);
                                    sessionStorage.removeItem('selectedProducts');
                                    window.location.reload();
                                }}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col xs={2} className='white'>
                        <p>Total Price: R{products.filter(product => JSON.parse(sessionStorage.getItem('selectedProducts')).includes(product._id)).reduce((total, product) => {
                            const selectedProductCount = JSON.parse(sessionStorage.getItem('selectedProducts')).filter(id => id === product._id).length;
                            return total + Number(product.price) * selectedProductCount;
                        }, 0)}</p>
                    </Col>
                </Row>
            }
        </>

    );
}

export default Checkout;
