
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
    
     
      
      </Routes>

      <Footer/>
      </>
  );
}

export default App;
