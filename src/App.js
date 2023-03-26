
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routers from './Components/Routers/Routers';



function App() {
  return (
    <div className='app'>
      
      <Header/>

      <div className='roots'>
      <Routers/>
      </div>

      <Footer/>


    </div>
  );
}

export default App;
