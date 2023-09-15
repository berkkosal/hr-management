
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
