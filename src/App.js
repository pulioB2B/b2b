import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const Gift = React.lazy(() => import('./components/gift/Gift'));
const Station = React.lazy(() => import('./components/station/Station'));
const Marketing = React.lazy(() => import('./components/marketing/Marketing'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Gift></Gift>}></Route>
          <Route path="/marketing" element={<Marketing></Marketing>}></Route>
          <Route path="/station" element={<Station></Station>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
