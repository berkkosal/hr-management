
import './App.css';
import AddEmployeeForm from './containers/Employees/AddEmployeeForm';
import EmployeeList from './containers/Employees/EmployeeList';

function App() {
  return (
    <div className="container">
      <EmployeeList/>
      

      <AddEmployeeForm />
    </div>
  );
}

export default App;
