import Navigationbar from './components/Navigationbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import Ideas from './pages/Ideas';

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
          <Route path='/about' element={<Layout><Home /></Layout>} />
          <Route path='/services' element={<Layout><Home /></Layout>} />
          <Route path='/careers' element={<Layout><Home /></Layout>} />
          <Route path='/contact' element={<Layout><Home /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
