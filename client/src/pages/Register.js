import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUser from "../api/apiUser";
import Swal from "sweetalert2";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const navigateTo = useNavigate();

  const submitHandler = async () => {
    try {
      const regist = await apiUser.registerUsers(form);
      console.log(regist.data);
      Swal.fire("Register berhasil");
      navigateTo("/login");
    } catch (error) {
      Swal.fire(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="container container-fluid mt-5">
      <h1>Register</h1>

      <div className="mt-3">
        <label>Username :</label>
        <input
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          className="form-control"
        />
      </div>
      <div>
        <label>Password :</label>
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          className="form-control"
        />
      </div>
      <div>
        <label>Role :</label>
        <select
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          class="form-select"
          aria-label="Default select example"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="mt-3">
        <button onClick={submitHandler} type="button" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
