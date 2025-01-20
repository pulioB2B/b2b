import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Gift from './components/gift/Gift';
import Station from './components/station/Station';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Gift></Gift>}></Route>
          <Route path="/station" element={<Station></Station>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
