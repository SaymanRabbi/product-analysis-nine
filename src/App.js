import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Component/Reviews/Reviews';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
import DefultPage from './Component/DefultPage/DefultPage';
function App() {
  return (
    <div>
      <Header></Header>      
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<DefultPage></DefultPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
