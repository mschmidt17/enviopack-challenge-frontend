import Home from "./pages/Home.js"
import Cart from "./pages/Cart.js"
import StateBuy from "./pages/StateBuy.js"
import NavBar from "./components/NavBar.js"
import {Route, Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/state" element={<StateBuy/>}/>
      </Routes>
    </div>
  );
}

export default App;
