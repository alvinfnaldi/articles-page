/* eslint-disable import/no-anonymous-default-export */
import axios from "../config/endpoint";
import Swal from "sweetalert2";

const getUsers = () => {
  return axios.get("/users");
};

const registerUsers = async (data) => {
  return await axios.post("/users/register", data);
};

const loginUsers = async (data) => {
  return await axios.post("/users/login", data);
};

const deleteUsers = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/users/delete/${id}`);
        await Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = async (id) => {
  return await axios.put(`/users/update/${id}`);
};

const getDetails = async (id) => {
  return await axios.get(`/users/details/${id}`);
};

export default {
  getUsers,
  registerUsers,
  loginUsers,
  deleteUsers,
  updateUsers,
  getDetails,
};
