import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './companents/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
