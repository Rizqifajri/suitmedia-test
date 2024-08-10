import Navigationbar from './components/Navigationbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import Ideas from './pages/Ideas';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function Layout({ children }) {
  return (
    <div>
      <Navigationbar />
      <main>{children}</main>
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Work /></Layout>} />
          <Route path='/ideas' element={<Layout><Ideas /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/services' element={<Layout><Services /></Layout>} />
          <Route path='/careers' element={<Layout><Careers /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
