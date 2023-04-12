import studentModel from "../models/studentModel.js";

//get all students
export const getAllStudent = async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(200).send({
      success: true,
      message: "All students",
      students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Getting Students",
      error,
    });
  }
};

//add new student
export const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name) {
      res.status(401).send({
        success: false,
        message: "Name is required",
      });
    }

    if (!email) {
      res.status(401).send({
        success: false,
        message: "Email is required",
      });
    }

    const student = await new studentModel({ name, email }).save();

    res.status(200).send({
      success: true,
      message: "New Sutdent Added",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while adding student",
      error,
    });
  }
};

//udpate student
export const updateStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { id } = req.params;
    const student = await studentModel.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "crediential updated",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating student",
      error,
    });
  }
};

//delete student
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Student deleted Successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error while deleting Student",
    });
  }
};
