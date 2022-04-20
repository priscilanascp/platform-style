import './App.css';
import BgImage from './video/background-img.mp4'
import Header from './components/Header'



function App() {
  return (
    <><div className="App">
      <video autoPlay loop muted>
        <source src={BgImage} type="video/mp4" />
      </video>
    </div>
    
    <Header /></>
    
   
 
  );
}


export default App;
