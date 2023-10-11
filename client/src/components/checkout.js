import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Checkout() {

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
            {sessionStorage.getItem('selectedProducts') && JSON.parse(sessionStorage.getItem('selectedProducts')).length > 0 ?
                JSON.parse(sessionStorage.getItem('selectedProducts')).map((productId) => {
                    const product = products.find(p => p.id === productId);
                    return (
                        <Row key={product.id} className='product-container d-flex align-items-center white'>
                            <Col xs={2}>
                                <p>{product.name}</p>
                            </Col>

                            <Col xs={2}>
                                <p>{product.make}</p>
                            </Col>

                            <Col xs={2}>
                                <p>{product.model}</p>
                            </Col>

                            <Col xs={1}>
                                <p>{product.year}</p>
                            </Col>

                            <Col xs={2}>
                                <p>{product.chase}</p>
                            </Col>

                            <Col xs={1}>
                                <p>{product.stock}</p>
                            </Col>

                            <Col xs={1}>
                                <p>R{product.price}</p>
                            </Col>

                        </Row>
                    )
                }) : <p className='white'>Cart is empty</p>}

            {sessionStorage.getItem('selectedProducts') && JSON.parse(sessionStorage.getItem('selectedProducts')).length > 0 &&
                <Row className='total-price-container d-flex align-items-center'>
                    <Col xs={9}>
                        <Button variant="primary">Checkout</Button>
                    </Col>
                    <Col xs={2} className='white'>
                        <p>Total Price: R{JSON.parse(sessionStorage.getItem('selectedProducts')).reduce((total, productId) => {
                            const product = products.find(p => p.id === productId);
                            return total + Number(product.price);
                        }, 0)}</p>
                    </Col>
                </Row>
            }
        </>

    );
}

export default Checkout;
