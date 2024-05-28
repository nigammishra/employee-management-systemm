import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './shared-componets/Header';
import Footer from './shared-componets/Footer';
import Employee from './pages-component/Employee';


function App() {
  return (
    <Router> 
      <Header/> 
      <Routes>
        <Route exact path="/" element={<Employee/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;