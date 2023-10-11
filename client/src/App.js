
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import Checkout from './pages/checkout';
import Landingpage from './pages/landingpage';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landingpage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/admin' element={<Admin />} />        
    </Routes>
  );
}

export default App;
