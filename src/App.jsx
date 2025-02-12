// import NavBar from './components/layouts/navbar/NavBar';
// import { ItemDetail } from './components/pages/itemDetail/itemDetail';
// import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
// import Footer from './components/layouts/footer/Footer';
// import './index.css';
// import { BrowserRouter, Routes, Route } from "react-router"
// import Cart from './components/pages/cart/Cart';
// import BurguerSection from './components/common/burguerSection/burguerSection';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={
//             <BurguerSection />
//             , <ItemListContainer />} />
//           <Route path="/category/:name" element={<ItemListContainer />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/itemDetail/:id" element={<ItemDetail />} />

//           <Route path="*" element={<h2>404 not found</h2>} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />

//     </>
//   );
// }

// export default App;


import NavBar from './components/layouts/navbar/NavBar';
import { ItemDetail } from './components/pages/itemDetail/itemDetail';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import Footer from './components/layouts/footer/Footer';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router"
import Cart from './components/pages/cart/Cart';
import BurguerSection from './components/common/burguerSection/BurguerSection';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<> <BurguerSection /> <ItemListContainer /> </>} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />


        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

