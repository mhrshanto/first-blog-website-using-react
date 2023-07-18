import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Protfolio from './pages/Protfolio'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
