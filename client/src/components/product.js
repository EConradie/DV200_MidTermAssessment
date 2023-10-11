import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Product() {

  const products = [
    {
      id: 1,
      name: 'Brake Pads',
      make: 'Toyota',
      model: 'Corolla',
      year: '2010',
      chase: '123456789',
      stock: '10',
      price: '300'
    },
    {
      id: 2,
      name: 'Oil Filter',
      make: 'Honda',
      model: 'Civic',
      year: '2015',
      chase: '987654321',
      stock: '15',
      price: '150'
    },
    {
      id: 3,
      name: 'Spark Plugs',
      make: 'Ford',
      model: 'F-150',
      year: '2020',
      chase: '567891234',
      stock: '8',
      price: '100'
    },
  ];


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

          <Col xs={1} className='text-center'>
            <p>{product.chase}</p>
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
              selectedProducts.push(product.id);
              sessionStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
            }}>Add to cart</Button>
          </Col>
        </Row>
      ))}
    </>

  );
}

export default Product;
