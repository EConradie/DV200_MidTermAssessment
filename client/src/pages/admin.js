import React, { useState } from 'react';
import axios from 'axios';

// Bootstrap
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Button from 'react-bootstrap/Button';

// Components
import AdminProduct from '../components/adminProduct';

function Admin() {

    const [name, setName] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [chasisNum, setChasisNum] = useState('');
    const [year, setYear] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="make">Make:</label>
      <input
        type="text"
        id="make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />

      <label htmlFor="model">Model:</label>
      <input
        type="text"
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />

      <label htmlFor="chasisNum">Chasis Number:</label>
      <input
        type="text"
        id="chasisNum"
        value={chasisNum}
        onChange={(e) => setChasisNum(e.target.value)}
      />

      <label htmlFor="year">Year:</label>
      <input
        type="text"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label htmlFor="stock">Stock:</label>
      <input
        type="text"
        id="stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
      <AdminProduct />
    </>
  );
}

export default Admin;