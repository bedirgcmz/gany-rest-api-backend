import * as taskRepository from "../data/TaskRepository.js";
import * as groupRepository from "../data/GroupRepository.js";
import * as studentRepository from "../data/StudentRepository.js";
import * as mentorRepository from "../data/MentorRepository.js";

/* Task fetch islmeleri */

//tum Taskleri getir
export const getTasks = async () => {
  return await taskRepository.getTasks();
};
// id ile bir Task getir
export const getTaskById = async (pId) => {
  return await taskRepository.getTaskById(pId);
};
//Ogrenciye ait Taskleri getir
export const getStudentTasks = async (pStudentId) => {
  return await taskRepository.getStudentTasks(pStudentId);
};

//Ogrenciye ait Taskleri getir
export const getMentorTasks = async (pMentorId) => {
  return await taskRepository.getMentorTasks(pMentorId);
};

//Gruba bagli bir Task olusturma
export async function addTaskToGroup(pGroupId, pStudentId, pMentorId, pTask) {
  const group = await groupRepository.getGroupById(pGroupId);
  const student = await studentRepository.getStudentById(pStudentId);
  const mentor = await mentorRepository.getMentorById(pMentorId);
  const newTask = await taskRepository.addTask(pTask);
  await group.addTask(newTask);
  await student.addTask(newTask);
  await mentor.addTask(newTask);
  return newTask;
}
//bir Task olustur
export async function addTask(pObj) {
  return await taskRepository.addTask(pObj);
}
// Bir Task sil
export const removeTask = async (pId) => {
  return await taskRepository.removeTask(pId);
};
//bir Task guncelle
export async function updateTask(pId, pObj) {
  return await taskRepository.updateTask(pId, pObj);
}
// // Task listesi olustur
// export async function addTaskList(pList) {
//   return await taskRepository.addTaskList(pList);
// }
