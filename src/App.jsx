import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Configurator from './pages/Configurator';
import Suppliers from './pages/Suppliers';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';

function App() {
    return (
        <LanguageProvider>
            <CartProvider>
                <Router>
                    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/catalog" element={<Catalog />} />
                                <Route path="/configurator" element={<Configurator />} />
                                <Route path="/suppliers" element={<Suppliers />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </LanguageProvider>
    );
}

export default App;
