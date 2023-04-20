import { Task } from "../commons/sequelize.js";

// ** Mentor repo islemleri ** \\

// Tum Task'lari alma
export const getTasks = async () => {
  return await Task.findAll();
};

//Task'lari id ile bir tane alma
export const getTaskById = async (pId) => {
  return await Task.findByPk(pId);
};

// Ogrenciye ait Task'lari alma
export const getStudentTasks = async (pStudentId) => {
  return await Task.findAll({ where: { studentId: pStudentId } });
};

// Mentore ait Task'lari alma
export const getMentorTasks = async (pMentorId) => {
  return await Task.findAll({ where: { mentorId: pMentorId } });
};

//bir tane task ekleme
export async function addTask(pObj) {
  return await Task.create(pObj);
}

//bir tane task silme
export async function removeTask(pId) {
  return await Task.destroy({
    where: { id: pId },
  });
}
//bir task guncelleme
export async function updateTask(pId, pObj) {
  await Task.update(pObj, {
    where: { id: pId },
  });
}
// //bir task listesi ekleme
// export async function addMentorList(pList) {
//   await Task.bulkCreate(pList);
// }
