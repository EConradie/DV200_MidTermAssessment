
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Bootstrap
import Contatiner from 'react-bootstrap/Container';

// Pages
import Admin from './pages/admin';
import CheckoutPage from './pages/checkout';
import Landingpage from './pages/landingpage';


import 'bootstrap/dist/css/bootstrap.min.css'

// Components 
import Navigation from './components/navbar';

function App() {
  return (

    <>
      <Navigation />

      <Contatiner className='mt-5'>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Contatiner>
    </>
  );
}

export default App;
