import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/restaurants" element={<Restaurant/>}></Route>
        <Route path="/meal-details/:id" element={<MealDetails/>}></Route>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
