import '../../App.css';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp.js';
import Welcome from '../Welcome';

function App() {
  return (
    <div >
     <Header/>

     <Welcome/>
     <Landing/>
     <Login/>
     <SignUp/>
     <Footer/>
    </div>
  );
}

export default App;
