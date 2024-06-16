import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import StoreDetail from './pages/StoreDetail';
import { NavermapsProvider } from 'react-naver-maps';

function App() {
  return (
    <NavermapsProvider ncpClientId='sb65ohhfs1' >
      
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryDetail" element={<CategoryDetail />} />
        <Route path='/storeDetail' element={<StoreDetail />} />
      </Routes>   
    </BrowserRouter>
    </NavermapsProvider>
  );
}

export default App;
