
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='*' element={<PageNotFound />}/>
         </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
