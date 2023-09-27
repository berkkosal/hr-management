import React, { useState } from 'react'
import { axiosPost } from '../../helper/AxiosInstance.ts';

export default function AddEmployeeForm() {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        departmentName: "",
        dateStarted: "",
        salary: "",

    });


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });

    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            await axiosPost("http://localhost:8080/add-employee", formData)
        } catch (error) {
            console.error('error')
        }



    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" onChange={handleInputChange} value={formData.name} placeholder="Name" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="surname">Surname</label>
                            <input type="text" className="form-control" id="surname" onChange={handleInputChange} value={formData.surname} placeholder="Surname" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email" onChange={handleInputChange} value={formData.email} placeholder="E-mail" />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="phoneNumber">Phone</label>
                            <input type="text" className="form-control" id="phoneNumber" onChange={handleInputChange} value={formData.phoneNumber} placeholder="Phone" />
                        </div>


                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="departmentName">Department</label>
                            <select id="departmentName" className="custom-select" onChange={handleInputChange} value={formData.departmentName} required>
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="dateStarted">Date of Start</label>
                            <input className="form-control" type="date" id="dateStarted" onChange={handleInputChange} value={formData.dateStarted}></input>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" id="salary" className="form-control" onChange={handleInputChange} value={formData.salary}></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-3">
                            <label htmlFor="uploadImage">Date of Start</label>
                            <input className="form-control" type="file" id="uploadImage"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Employee</button>
                </>
            </form>
        </>


    )
}
