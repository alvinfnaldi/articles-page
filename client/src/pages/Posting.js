import React, { useState } from "react";
import apiNews from "../api/apiNews";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Posting = () => {
  const [form, setForm] = useState({
    title: "",
    newsBody: "",
    category: "",
    writer: "",
    wirterId: "",
    status: false
  });

  const navigateTo = useNavigate();

  const submitHandler = async () => {
    try {
      const result = await apiNews.createNews(form);
      console.log(result.data);
      Swal.fire("Posting data berhasil");
      navigateTo("/");
    } catch (error) {
      Swal.fire(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <Nav />
      <h4>Add Post</h4>

      <div className="mt-3">
        <label>Title :</label>
        <input
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label>Content :</label>
        <textarea onChange={(e) => setForm({ ...form, newsBody: e.target.value })} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
        <label>Category :</label>
        <select
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          class="form-select"
          aria-label="Default select example"
        >
          <option value="Politics">Politics</option>
          <option value="Economics">Economics</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div>
        <label>Writer :</label>
        <input
          onChange={(e) => setForm({ ...form, writer: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label>Status :</label>
        <select
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          class="form-select"
          aria-label="Default select example"
        >
          <option value={false}>Draft</option>
          <option value={true}>Publish</option>
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

export default Posting;
