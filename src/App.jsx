import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mahkota from './pages/Mahkota';
import Headpiece from './pages/Headpiece';
import Hairpiece from './pages/Hairpiece';
import Allproducts from './pages/AllProducts';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {
  // SIDEBAR FIRST STEP : buat kondisi useState, beri nilai false, kemudian buat komponen Sidebar
const [isSidebarOpen, setIsSidebarOpen] = useState(false)

// SIDEBAR FIFTH STEP : buat function button toggle untuk mengubah nilai useState *isSidebarOpen*), buat function mengubah nilai usestate menjadi kebalikannya
const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen)
}

  return (
    <>
    <div className='flex justify-center flex-col items-center'>
    {/* SIDEBAR SIXTH STEP : hubungkan tombol toggle di navbar ke function toggle sidebar */}
      <Navbar toggleSidebar={toggleSidebar}/> 
      {/* SIDEBAR SECOND STEP : hubungkan komponen dengan nilai useState */}
      <Sidebar kondisi={isSidebarOpen} toggleSidebar={toggleSidebar}/> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mahkota' element={<Mahkota />} />
        <Route path='/hairpiece' element={<Hairpiece />} />
        <Route path='/headpiece' element={<Headpiece />} />
        <Route path='/allproducts' element={<Allproducts />} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}