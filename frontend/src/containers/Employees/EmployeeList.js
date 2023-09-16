import React, { useEffect, useState } from 'react'
import { axiosGet, axiostDelete } from '../../helper/AxiosInstance.ts'
import { Link } from 'react-router-dom';
//İsimle filtreleme yaparak sonuçlar döndürülecek.
//Add Employee butonu olacak AddEmployeeForm'a yönlendirme yapacak.
//Card => Fotoğraf, İsim Soyisim, Departman gözükmeli.
//Update, Delete butonları olmalı.
//Update EmployeeUpdate'e yönlendirecek.
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
      <Link to="/add-employee" className="btn btn-primary mb-2"> Add Employee</Link>
      <ul>
        {employees.map((emp) => (
          <li key={emp.uuid}> 
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

      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card" style={{ width: "15rem" }}>
              <img className="card-img-top" src={""} alt="" />
              <div className="card-body">
                <p className="card-text">Hoşgeldiniz</p>
                <button>Giriş yap</button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card" style={{ width: "16rem" }}>
              <img className="card-img-top" src={""} alt="" />
              <div className="card-body">
                <p className="card-text">Hoşgeldiniz</p>
                <button>Giriş yap</button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={""} alt="" />
              <div className="card-body">
                <p className="card-text">Hoşgeldiniz</p>
                <button>Giriş yap</button>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>


  )
}
