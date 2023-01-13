import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import Home from './pages/Home';
import AqiDetail from './components/AqiDetail';
import PageNotFound from './pages/PageNotFound';
import logoIcon from './assets/logoIcon.png';
import Aqi from './pages/Aqi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img className="logo-image" src={logoIcon} alt="logo" />
          <h1 className="logo-heading">irQualityIndex</h1>
        </div>
        <nav>
          <HiOutlineMenu className="hamburger" style={{ fontSize: '2rem', color: '#b3e1ef' }} />
          <Link className="home" to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/AqiDetail" element={<AqiDetail />} />
        <Route path="/Aqi" element={<Aqi />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
