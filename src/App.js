import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AqiDetail from './components/AqiDetail';
import PageNotFound from './pages/PageNotFound';
import logoIcon from './assets/logoIcon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img className="logo-image" src={logoIcon} alt="logo" />
          <h1 className="logo-heading">irQualityIndex</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/AqiDetail" element={<AqiDetail />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
