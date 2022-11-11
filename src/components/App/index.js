import '../../App.css';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import Welcome from '../Welcome';

function App() {
  return (
    <div >
     <Header/>

     <Welcome/>
     <Landing/>
     <Login/>
     
     <Footer/>
    </div>
  );
}

export default App;
