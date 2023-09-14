import React from 'react'

export default function UserLogin() {
  return (
    <div className="container">
      <form>
        <div className="formWrapper">
          <div className="form-row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">E-mail</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="surname">Password</label>
              <input type="text" className="form-control" id="surname" placeholder="Surname" />
            </div>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>

    </div>
  )
}
