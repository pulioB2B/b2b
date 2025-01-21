import './App.css';
import './index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Header from './components/common/Header';

const Gift = React.lazy(() => import('./components/gift/Gift'));
const Station = React.lazy(() => import('./components/station/Station'));
const Footer = React.lazy(() => import('./components/common/Footer'));

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // 페이지가 완전히 로드된 후 Footer 표시
    window.onload = () => {
      setShowFooter(true);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Gift></Gift>}></Route>
          <Route path="/station" element={<Station></Station>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {showFooter && <Footer></Footer>}
      </BrowserRouter>
    </div>
  );
}

export default App;
