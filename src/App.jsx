import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mahkota from './pages/Mahkota';
import Headpiece from './pages/Headpiece';
import Hairpiece from './pages/Hairpiece';
import Allproducts from './pages/AllProducts';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mahkota' element={<Mahkota />} />
        <Route path='/hairpiece' element={<Hairpiece />} />
        <Route path='/headpiece' element={<Headpiece />} />
        <Route path='/allproducts' element={<Allproducts />} />
      </Routes>
    </>
  );
}