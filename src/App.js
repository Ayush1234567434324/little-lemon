import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Reservations from './components/Reservations/Reservations';
import OrderOnline from './components/Order/Order';
import Login from './components/Login/Login';
import Donate from './components/Donate/Donate';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
       <header className="header">
       <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
