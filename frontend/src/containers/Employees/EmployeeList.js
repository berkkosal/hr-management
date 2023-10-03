import React, { useEffect, useState } from 'react'
import { axiosGet, axiostDelete } from '../../helper/AxiosInstance.ts'
import { Link } from 'react-router-dom';
//İsimle filtreleme yaparak sonuçlar döndürülecek.
//Card => Fotoğraf, İsim Soyisim, Departman gözükmeli.
//Update, Delete butonları olmalı.
//Update EmployeeUpdate'e yönlendirecek.
const EmployeeList = () => {

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

  const employeeData = async (employeeId) => {
    try {
      const response = await axiosGet(`http://localhost:8080/delete-employee/${employeeId}`)

    } catch (error) {
      console.error('Error fetching employee', error);
    }
  }

  const updateEmployee = (emp) => {
    setUpdateEmployee(emp);
  };

  const setUpdateEmployee = (emp) => {  
    localStorage.setItem("employee_data", JSON.stringify(emp));
    console.log(emp);
  };


  return (
    <div>
      <Link to="/add-employee" className="btn btn-primary mb-2"> Add Employee</Link>

      <div className="container" >
        <div className="col-md">
          <div className='row'>
            <div className="card" style={{ maxWidth: "18rem" }}>
              <img className="card-img-top" src={"https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"} alt="" />
              <div className="card-body d-flex flex-column align-items-center">

                {employees.map((emp) => (
                  <div className="card-body d-flex flex-column align-items-center" key={emp.uuid}>
                    <h2 className="card-title">{emp.name + " " + emp.surname}</h2>
                    <p className="card-text">{emp.departmentName}</p>

                    <Link to={`/update-employee/${emp.uuid}`}>
                      <button className='btn btn-info mx-1' onClick={() => setUpdateEmployee(emp)}>Update</button>
                    </Link>

                    {/* <Link to={`/view-employee/${emp.uuid}`}>
                      <button className='btn btn-info mx-1' onClick={() => viewEmployee(emp)}>View</button>
                    </Link> */}

                    <button className="btn btn-danger" onClick={() => deleteEmployee(emp.uuid)}>Delete</button>
                  </div>
                ))}

                
              </div>
            </div>
          </div>
        </div>








      </div>
    </div>







  )
}

export default EmployeeList;