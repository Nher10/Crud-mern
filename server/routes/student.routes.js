import express from 'express'
import { addStudent, deleteStudent, getAllStudent, updateStudent } from '../controllers/studentController.js'


const router = express.Router()

//get all students
router.get('/', getAllStudent)
router.post('/add-student', addStudent)
router.put('/update-student/:id', updateStudent)
router.delete('/delete-student/:id', deleteStudent)



export default router