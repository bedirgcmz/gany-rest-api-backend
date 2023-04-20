import express from "express";
const router = express.Router();

import * as studentService from "../services/StudentService.js";

//Tum student'leri alma
router.get("/students", async (req, res) => {
  const list = await studentService.getStudents();
  res.status(200).send(list);
});

//Login olan mentore ait student'leri alma
router.get("/studentsmentor", async (req, res) => {
  const mentorUserName = req.query.mentorUserName;
  const list = await studentService.getMentorStudents(mentorUserName);
  res.status(200).send(list);
});

//Login olan admine ait student'leri alma
router.get("/studentsadmin", async (req, res) => {
  const organisationId = req.query.organisationId;
  const list = await studentService.getAdminStudents(organisationId);
  res.status(200).send(list);
});

// id ile bir student alma
router.get("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  const student = await studentService.getStudentById(studentId);
  res.status(200).send(student);
});

//Router
//gruba bagli bir Student olusturma  // /api/v1/gany/students?groupName="Kaplanlar 2"
router.post("/students", async (req, res) => {
  const groupId = req.query.groupId;
  const organisationId = req.query.organisationId;
  const student = req.body;
  const newStudent = await studentService.addStudentToGroup(groupId, organisationId, student);
  res.status(201).send(newStudent);
});

// //bir student ekleme
// router.post("/students", async (req, res) => {
//   const student = req.body;
//   const newStudent = await studentService.addStudent(student);
//   res.status(201).send(newStudent);
// });

//student listesi ekleme
router.post("/studentlist", async (req, res) => {
  const students = req.body;
  const newStudents = await studentService.addStudentList(students);
  res.status(201).send(newStudents);
});

//Bir student silme
router.delete("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  await studentService.removeStudent(studentId);
  res.status(200).send(null);
});

//Bir student guncelle
router.put("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  const existingStudent = req.body;
  const updatedStudent = await studentService.updateStudent(studentId, existingStudent);

  res.status(200).send(updatedStudent);
});

//Email ile bir student arama (login islemi icin)
router.post("/students/check", async (req, res) => {
  const auth0User = req.body;
  const student = await studentService.getCheckStudents(auth0User);
  res.status(200).send(student);
});

export { router };
