import './App.css';
import CardSectionList from './Section/CradSectionList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './pages/post'
import Navigation from './pages/navigation'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
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
