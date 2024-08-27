import About from "./components/About";
import Navbar from "./components/Navbar";
import Productdetails from "./components/Productdetails";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Route,Routes ,Link, } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Slider/>
              <ProductsList/>
            </>
          }></Route>
          <Route path="/About" element={<About/>}>
          </Route>
          <Route path="product/:productid" element={<Productdetails/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
