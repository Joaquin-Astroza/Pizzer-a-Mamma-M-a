import Footer from "./assets/components/footer/Footer";
import Home from "./assets/components/home/Home";
import Navbar from "./assets/components/navbar/Navbar";
import {library} from "@fortawesome/fontawesome-svg-core"
import {faUser, faShoppingCart, faLock, faUnlock, faPizzaSlice,faEye} from "@fortawesome/free-solid-svg-icons"
import "./App.css"
library.add(faUser, faShoppingCart, faLock, faUnlock, faPizzaSlice, faEye)

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>
  );
}
export default App;

