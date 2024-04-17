import {Routes, Route} from 'react-router-dom';
import { Box }  from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products';
import Contact from './pages/Contact';
import CheckOut from './pages/CheckOut';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './CartContext';
import { ProductProvider } from './ProductContext';



function App() {
  const categories = ["Branding", "Web", "Video"];

  return (
  <>
<ProductProvider>
<CartProvider>
<Box className="w-100 h-100">
<Navbar categories={categories}/>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/productos" element={<Products/>}/>
         <Route path="/contacto" element={<Contact/>}/>
         <Route path="/producto/:id" element={<ProductPage />} />
         <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  </Box>
  </CartProvider>
  </ProductProvider>
  </>
  );
}

export default App