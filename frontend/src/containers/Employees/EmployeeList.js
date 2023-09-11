import React, { useEffect, useState } from 'react'
import { axiosGet, axiostDelete } from '../../helper/AxiosInstance.ts'


export default function EmployeeList() {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    getAllEmployees();

  }, []);

  const getAllEmployees = async () => {
    try {
      const response = await axiosGet("http://localhost:8080/get-employees");
      setEmployees(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching employee', error);
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      const response = await axiostDelete(`http://localhost:8080/delete-employee/${employeeId}`);
      console.log(response);
    } catch (error) {
      console.error('Error deleting employee', error);

    }
  }



  return (
    <div>
      <h1>All Employees</h1>
      {/* <Link to="add-employee" className="btn btn-primary mb-2"> Add Employee</Link> */}

      <ul>
        {employees.map((emp) => (
          <li key={emp.uuid}> {/* Added key prop here */}
            {emp.name}
            <br />
            {emp.surname}
            <br />
            {emp.uuid}
            <br />
            {emp.email}
            <button className="btn btn-danger" onClick={() => deleteEmployee(emp.uuid)}>Delete</button>
          </li>
        ))}

      </ul>
    </div>
  )
}
