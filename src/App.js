import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/restaurants" element={<Restaurant/>}></Route>
      </Routes>

    </>
  );
}

export default App;
