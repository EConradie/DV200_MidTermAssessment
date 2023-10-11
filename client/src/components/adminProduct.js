import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AdminProduct() {

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
        <Row key={product.id}>
          <Col>
            <p>{product.name}</p>
          </Col>

          <Col>
            <p>{product.make}</p>
          </Col>

          <Col>
            <p>{product.model}</p>
          </Col>

          <Col>
            <p>{product.year}</p>
          </Col>

          <Col>
            <p>{product.chase}</p>
          </Col>

          <Col>
            <p>{product.stock}</p>
          </Col>

          <Col>
            <Button variant="primary">Update</Button>
          </Col>
          
          <Col>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      ))}
    </>

  );
}

export default AdminProduct;
