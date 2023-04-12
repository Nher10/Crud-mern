import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);

  //get all students
  const getAllStudents = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/");
      setStudent(data.students);
    } catch (error) {
      console.log(error);
    }
  };

  //delete student
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/delete-student/${id}`);
      setStudent(student.filter((s) => s._id !== id));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          {" "}
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>
                  <Link to={`/update/${s._id}`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => deleteStudent(s._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {JSON.stringify(student, null, 4)} */}
    </div>
  );
};

export default Student;
