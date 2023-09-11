
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AddEmployeeForm from "./containers/Employees/AddEmployeeForm";
import EmployeeUpdate from "./containers/Employees/EmployeeUpdate";

function App() {
  return (
    <div>
      <Header />

      <div className="container">

        <Router>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/add-employee" element={<AddEmployeeForm />} />
            <Route path="/update-employee" element={<EmployeeUpdate />} />

          </Routes>
        </Router>

      </div>
      <Footer />

    </div>
  );
}

export default App;
