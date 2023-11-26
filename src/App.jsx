import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Description from './pages/Description';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Cart from './pages/Cart';

export default function App() {
  return (
    <>

      {/* Routing Halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/upload" element={<Upload />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  );
}