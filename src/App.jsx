import NavBar from './components/layouts/navbar/NavBar';
import { ItemDetail } from './components/pages/itemDetail/ItemDetail';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import Footer from './components/layouts/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router"
import Cart from './components/pages/cart/Cart';
import BurguerSection from './components/common/burguerSection/BurguerSection';
import Checkout from './components/pages/checkout/Checkout';
import CartContextProvider from './context/CartContext';
import { Toaster } from 'sonner';
import './index.css';



function App() {
  return (
    <BrowserRouter>

      <CartContextProvider>

        <Toaster duration={2000} richColors />

        <NavBar />

        <Routes>
          <Route path="/" element={<> <BurguerSection /> <ItemListContainer /> </>} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>

        <Footer />

      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;

