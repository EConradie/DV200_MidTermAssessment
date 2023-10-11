import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Product() {

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

        <Col xs={1} className='text-center'>
          <p>Chasis Nr</p>
        </Col>

        <Col xs={1} className='text-center'>
          <p>Stock</p>
        </Col>

        <Col xs={1} className='text-center'>
          <p>Price</p>
        </Col>

        <Col xs={2} className='text-center'>
          <p>Add to cart</p>
        </Col>

      </Row>

      {products.map((product) => (
        <Row key={product._id} className='product-container d-flex align-items-center'>
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

          <Col xs={1} className='text-center'>
            <p>{product.chasisNum}</p>
          </Col>

          <Col xs={1} className='text-center'>
            <p>{product.stock}</p>
          </Col>

          <Col xs={1} className='text-center'>
            <p>R{product.price}</p>
          </Col>

          <Col xs={2} className='text-end'>
            <Button variant="primary" onClick={() => {
              let selectedProducts = sessionStorage.getItem('selectedProducts');
              selectedProducts = selectedProducts ? JSON.parse(selectedProducts) : [];
              selectedProducts.push(product._id);
              sessionStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
            }}>Add to cart</Button>
          </Col>
        </Row>
      ))}
    </>

  );
}

export default Product;
