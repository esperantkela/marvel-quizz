import '../../App.css';
import ErrorPage from '../ErrorPage';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp.js';
import Welcome from '../Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
     <Header/>

     <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
