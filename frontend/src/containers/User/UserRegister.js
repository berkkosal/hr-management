import React from 'react'
import { Link } from 'react-router-dom'





const UserRegister = (e) => {



    



    return (
        <div className="container">
            <form>
                <div className="form-row">

                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />

                    <div className="form-group col-sm-6">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" className="form-control" id="surname" placeholder="Surname" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="E-mail" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                </div>
                <div className="signUpButtonWrapper">
                    <button type="submit">Sign Up</button>
                </div>
                <div className="forgetPasswordWrapper">
                    <Link to="/">Forget password?</Link>
                </div>
            </form>
        </div>


    )
}
export default UserRegister;