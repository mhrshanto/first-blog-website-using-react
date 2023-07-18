import './App.css';
import CardSectionList from './Section/CradSectionList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './pages/post'
import Header from './pages/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardSectionList></CardSectionList>}></Route>
          <Route path='/about' element={<Post></Post>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
