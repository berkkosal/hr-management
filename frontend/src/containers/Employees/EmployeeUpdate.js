import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosGet } from '../../helper/AxiosInstance';
//EmployeeList'ten buraya yönlendirme yapılacak.
//=> Fotoğraf, İsim Soyisim, Departman, E-mail, Tel No düzenlenebilmeli.


function EmployeeUpdate(emp) {

  //Redirect
  let navigate = useNavigate();

  const [updatedData, setUpdatedData] = useState([]);
  const [id, setID] = useState(null);

  //Params
  const updateID = useParams();

  const findEmployee = async (employeeId) => {
    try {
      const response = await axiostDelete(`http://localhost:8080/delete-employee/${employeeId}`);
      console.log(response);
    } catch (error) {
      console.error('Error deleting employee', error);

    }
  }

  //UseEffect
  useEffect(() => {
    
    setID(updateID.id);
    CategoryApi.categoryApiFindById(updateID.id)
    .then((response) => {
      console.log(response.data);
      setCategoryName(response.data.categoryName)
    })
    .catch((err) => {
      console.error(err);
    });
  },[])//end effect

  const employeeData = JSON.parse(localStorage.getItem('employee_data'));

 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem('employee_data', JSON.stringify(updatedData));
  };

  return (
    <>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={updatedData.name}
        onChange={handleInputChange}
      />

      <button onClick={handleSave}>Save</button>

    </>
  )
}

export default EmployeeUpdate;