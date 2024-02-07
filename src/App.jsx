
import './App.css';
import AllDoctors from './Components/AllDoctors';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Routes,Route } from 'react-router-dom';
import ViewDoctors from './Components/ViewDoctors';
function App() {
  return (
    <div className="App">
     <header>
        <Header />
      </header>
      <section>
          <Routes>
                 <Route path='/' element={<AllDoctors/>}/>
                 <Route path='/view/:id' element={<ViewDoctors/>} />
          </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
