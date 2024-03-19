import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './layout/navbar';
import Home from './page/Home';
import AddEmployee from './function/addEmployee';
import EditEmployee from './function/EditEmployee';
import ViewEmployee from './function/ViewEmployee';

function App() {
  return (  
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addEmployee' element={<AddEmployee />} />
          <Route exact path='/editEmployee/:id' element={<EditEmployee />} />
          <Route exact path='/viewEmployee/:id' element={<ViewEmployee />} />
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
