import React, { useState } from 'react'
import { axiosGet } from '../../helper/AxiosInstance.ts'

export default function EmployeeList() {

  const [employee, setEmployee] = useState([]);


  const handleClick = async () => {
    try {
      const response = await axiosGet("http://localhost:8080/get-employees");
      setEmployee(response.data);
      console.log(response);

    } catch (error) {
      console.error('Error fetching employee',error);
    }
  }
//fds
  return (
    <div>
      <button onClick={handleClick}>All Employees</button>

      <ul>
        {employee.map((emp) => (
          
          <li key={emp.uuid}>{emp.name}<br/>{emp.surname}<br/>{emp.uuid}</li>
          
          
        ))}
      </ul>
    </div>
  )
}
