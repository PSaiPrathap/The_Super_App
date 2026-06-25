import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Register from "./pages/Register/index";
import Categories from "./pages/Categories/index";
import Dashboard from "./pages/Dashboard/index";
import Movies from "./pages/Movies/index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/categories" element={<Categories />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
