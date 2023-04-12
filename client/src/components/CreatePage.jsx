import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const studentData = { name, email };
      const response = await axios.post(
        "http://localhost:8080/api/v1/add-student",
        studentData
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleCreate}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-secondary ms-3">
            BACK
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
