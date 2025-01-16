import './App.css';
import './index.css';
import Main from './components/station/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/station" element={<Main></Main>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
