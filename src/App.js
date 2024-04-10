import Delivery from "./components/delivery/Delivery";
import Employess from "./components/employees/Employess";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Partners from "./components/partners/Partners";
import Prices from "./components/prices/Prices";
import Services from "./components/services/Services";
import Trucks from "./components/trucks/Trucks";
import "./scss/style.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Delivery/>
      <Prices/>
      <Services/>
      <Partners/>
      <Employess/>
      <Trucks/>
      <Footer/>
    </div>
  );
}

export default App;
