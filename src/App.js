import './App.css';
import './index.css';
import Main from './components/station/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/station"></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
