import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/restaurants" element={<Restaurant/>}></Route>
        <Route path="/meal-details/:id" element={<MealDetails/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
