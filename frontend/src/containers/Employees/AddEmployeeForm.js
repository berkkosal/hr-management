import React from 'react'

export default function AddEmployeeForm() {


    return (
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="inputSurname">Surname</label>
                        <input type="text" className="form-control" id="inputSurname" placeholder="Surname" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-sm-4">
                        <label for="inputEmail">E-mail</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="E-mail" />
                    </div>

                    <div className="form-group col-sm-4">
                        <label for="inputPhoneNumber">Phone</label>
                        <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone" />
                    </div>

                    <div className="form-group col-sm-4">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
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
                        <input className="form-control" type="date" id="startingDate"></input>
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="salary">Salary</label>
                        <input type="text" id="salary" className="form-control"></input>
                    </div>
                </div>
            </form>
        </>


    )
}
