import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bandana from './pages/Bandana';
import Headpiece from './pages/Headpiece';
import Hairpiece from './pages/Hairpiece';
import Allproducts from './pages/AllProducts';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Footer from './components/Footer';
import Login from './pages/login';
import Register from './pages/Register';
import Search from './components/Search';
import Searchpage from './pages/Searchpage';
import Description from './pages/Description';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Cart from './pages/Cart';


export default function App(children) {
  // SIDEBAR FIRST STEP : buat kondisi useState, beri nilai false, kemudian buat komponen Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  //first Search
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // SIDEBAR FIFTH STEP : buat function button toggle untuk mengubah nilai useState *isSidebarOpen*), buat function mengubah nilai usestate menjadi kebalikannya
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  return (
    <>
      <div className='flex justify-center flex-col items-center'>
        {/* SIDEBAR SIXTH STEP : hubungkan tombol toggle di navbar ke function toggle sidebar */}
        <Navbar toggleSidebar={toggleSidebar} toggleSearch={toggleSearch} />

        {/* SIDEBAR SECOND STEP : hubungkan komponen dengan nilai useState */}
        <Sidebar kondisi={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* second search step */}
        <Search kondisi={isSearchOpen} togglesSearch={toggleSearch} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bandana' element={<Bandana />} />
          <Route path='/hairpiece' element={<Hairpiece />} />
          <Route path='/headpiece' element={<Headpiece />} />
          <Route path='/allproducts' element={<Allproducts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/searchpage' element={<Searchpage />} />
          <Route path="/description" element={<Description />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/upload" element={<Upload />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}