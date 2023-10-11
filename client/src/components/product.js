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
