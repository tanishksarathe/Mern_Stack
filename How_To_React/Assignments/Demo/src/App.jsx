import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Product from "./Pages/Product";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
