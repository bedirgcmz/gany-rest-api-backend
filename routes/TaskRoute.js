import express from "express";
const router = express.Router();

import * as taskService from "../services/TaskService.js";

/* Genel icerik materyalleri islmeleri */

//Tum Task'lari alma
router.get("/tasks", async (req, res) => {
  const list = await taskService.getTasks();
  res.status(200).send(list);
});

//Ogrenciye ait Task'lari alma
router.get("/tasksstudent", async (req, res) => {
  const studentId = req.query.studentId;
  const list = await taskService.getStudentTasks(studentId);
  res.status(200).send(list);
});

//Mentore ait Task'lari alma
router.get("/tasksmentor", async (req, res) => {
  const mentorId = req.query.mentorId;
  const list = await taskService.getMentorTasks(mentorId);
  res.status(200).send(list);
});

// id ile bir Task alma
router.get("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  const task = await taskService.getTaskById(taskId);
  res.status(200).send(task);
});

//gruba bagli bir tasks olusturma  // /api/v1/gany/tasks?groupId=4
router.post("/tasks", async (req, res) => {
  const groupId = req.query.groupId;
  const studentId = req.query.studentId;
  const mentorId = req.query.mentorId;
  const task = req.body;
  const newTask = await taskService.addTaskToGroup(groupId, studentId, mentorId, task);
  res.status(201).send(newTask);
});

//Bir Task silme
router.delete("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  await taskService.removeTask(taskId);
  res.status(200).send(null);
});

//Bir Task guncelle
router.put("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  const existingTask = req.body;
  const updatedTask = await taskService.updateTask(taskId, existingTask);

  res.status(200).send(updatedTask);
});

export { router };
