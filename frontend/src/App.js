
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';

import AddEmployeeForm from "./containers/Employees/AddEmployeeForm";
import EmployeeUpdate from "./containers/Employees/EmployeeUpdate";
import UserRegister from "./containers/User/UserRegister";
import UserLogin from "./containers/User/UserLogin";
import EmployeeList from "./containers/Employees/EmployeeList";
import EmployeeView from "./containers/Employees/EmployeeView";


function App() {
  return (
    <div>
      <img className="backgroundImage" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
      <Header  />
      
      <div className="container">

        <Router>
          <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="/list" element={<EmployeeList/>} />
            <Route path="/sign-up" element={<UserRegister/>}/>
            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/view" element={<EmployeeView/>}/>
            <Route path="/add-employee" element={<AddEmployeeForm />} />
            <Route path="/update-employee" element={<EmployeeUpdate />} />
            
          </Routes>
        </Router>

      </div>
      <Footer  />
    </div>
  );
}

export default App;
