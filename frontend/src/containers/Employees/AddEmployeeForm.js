import React, { useState } from 'react'
import { axiosPost } from '../../helper/AxiosInstance.ts';

export default function AddEmployeeForm() {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        departmentName: "",
        startingDate: "",
        salary: "",

    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosPost("https://localhost:8080/add-employee", formData)

    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName"onChange={handleInputChange} value={formData.name} placeholder="Name" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="inputSurname">Surname</label>
                        <input type="text" className="form-control" id="inputSurname" onChange={handleInputChange} value={formData.surname} placeholder="Surname" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label for="inputEmail">E-mail</label>
                        <input type="email" className="form-control" id="inputEmail"onChange={handleInputChange} value={formData.email} placeholder="E-mail" />
                    </div>

                    <div className="form-group col-sm-6">
                        <label for="inputPhoneNumber">Phone</label>
                        <input type="text" className="form-control" id="inputPhoneNumber" onChange={handleInputChange} value={formData.phoneNumber} placeholder="Phone" />
                    </div>



                </div>
                <div className="form-row">
                    <div className="form-group col-sm-4">
                        <label for="departmentName">Department</label>
                        <select id="departmentName" class="custom-select" required>
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="startingDate">Date of Start</label>
                        <input className="form-control" type="date" id="startingDate" onChange={handleInputChange} value={formData.startingDate}></input>
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="salary">Salary</label>
                        <input type="text" id="salary" className="form-control" onChange={handleInputChange} value={formData.salary}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </>


    )
}
