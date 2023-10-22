import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUser from "../api/apiUser";
import Swal from "sweetalert2";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const result = await apiUser.loginUsers(form);
      const token = result.data.token
      localStorage.setItem("token", token);
      console.log(token);

      Swal.fire("Login Success");
      navigateTo("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="container container-fluid mt-5">
      <h1>Login</h1>
      <div>
        <label>Email :</label>
        <input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div>
        <label>Password :</label>
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          className="form-control"
          required
        />
      </div>
      <div className="mt-3">
        <button onClick={submitHandler} type="button" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
