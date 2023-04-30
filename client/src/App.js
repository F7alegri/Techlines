import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import LandingPage from './screens/LandingScreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route
              path='/products'
              element={<ProductsScreen />}></Route>
            <Route
              path='/product/:id'
              element={<ProductScreen />}></Route>
            <Route
              path='/cart'
              element={<CartScreen />}></Route>
            <Route
              path='/'
              element={<LandingPage />}></Route>
          </Routes>
        </main>

        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
