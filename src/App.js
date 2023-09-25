
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import Slider from "./components/Slider";
import { Route,Routes } from "react-router-dom";
import Bags from './Bags';
import WomenShoes from "./components/WomenShoes";
import WomenApparels from "./components/WomenApparels";
import Kids from "./components/Kids";
import Accessories from "./components/Accessories";
import Beauty from "./components/Beauty";
import Sale from "./components/Sale";
import Parent from "./components/Parent";
import Dress from "./components/Dress";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsApparels from "./components/ProductDetailsApparels";
import ProductDetailsBags from "./ProductDetailsBags";
import ProductDetailsKids from "./components/ProductDetailsKids";
import ProductDetailsAccessories from './components/ProductDetailsAccessories';
import ProductDetailsBeauty from './components/ProductDetailsBeauty';
import ContactUs from "./components/ContactUs";












function App() {
  return (
    <>
      <Prenav/>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Slider/>}></Route>
      <Route path="/sale" element={<Sale/>}></Route>
      <Route path="/cards" element={<Cards/>}></Route>
      <Route path="/dress" element={<Dress/>}></Route>
      <Route path="/bags" element={<Bags/>}></Route>
      <Route path="/womenshoes" element={<WomenShoes/>}></Route>
      <Route path="/womenapparels" element={<WomenApparels/>}></Route>
      <Route path="/kids" element={<Kids/>}></Route>
      <Route path="/accessories" element={<Accessories/>}></Route>
      <Route path="/beauty" element={<Beauty/>}></Route>
      <Route path="/parent" element={<Parent/>}></Route>
      <Route path="/womenshoes/:id" element={<ProductDetails/>}></Route>
      <Route path="/womenapparels/:id" element={<ProductDetailsApparels/>}></Route>
      <Route path="/bags/:id" element={<ProductDetailsBags/>}></Route>
      <Route path="/kids/:id" element={<ProductDetailsKids/>}></Route>
      <Route path="/accessories/:id" element={<ProductDetailsAccessories/>}></Route>
      <Route path="/beauty/:id" element={<ProductDetailsBeauty/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      

     
     
      
   
      
    
     
      
      </Routes>

      <Footer/>
      </>
  );
}

export default App;
