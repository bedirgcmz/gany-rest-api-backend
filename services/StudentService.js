import * as groupRepository from "../data/GroupRepository.js";
import * as studentRepository from "../data/StudentRepository.js";
import * as generalRepository from "../data/GeneralRepository.js";

/* Student fetch islmeleri */

//tum Student'leri getir
export const getStudents = async () => {
  return await studentRepository.getStudents();
};
//Login olan mentore ait Student'leri getir
export const getMentorStudents = async (pMentorUserName) => {
  return await studentRepository.getMentorStudents(pMentorUserName);
};
//Login olan admine ait Student'leri getir
export const getAdminStudents = async (pOrganisationId) => {
  return await studentRepository.getAdminStudents(pOrganisationId);
};
// id ile bir Student getir
export const getStudentById = async (pId) => {
  return await studentRepository.getStudentById(pId);
};
//Service
//Gruba bagli bir Student olusturma
export async function addStudentToGroup(pGroupId, pOrganisationId, pStudent) {
  const group = await groupRepository.getGroupById(pGroupId);
  const organisation = await generalRepository.getOrganisationById(pOrganisationId);
  const newStudent = await studentRepository.addStudent(pStudent);
  await group.addStudent(newStudent);
  await organisation.addStudent(newStudent);
  return newStudent;
}
//bir Student olustur
export async function addStudent(pObj) {
  return await studentRepository.addStudent(pObj);
}
// Student listesi olustur
export async function addStudentList(pList) {
  return await studentRepository.addStudentList(pList);
}
// Bir Student sil
export const removeStudent = async (pId) => {
  return await studentRepository.removeStudent(pId);
};
//bir Student guncelle
export async function updateStudent(pId, pObj) {
  return await studentRepository.updateStudent(pId, pObj);
}
//Email ile bir student arama (login islemi icin)
export const getCheckStudents = async (pUser) => {
  const isUserExisting = await studentRepository.getCheckStudents(pUser);
  if (isUserExisting) {
    return {
      email: pUser.email,
      allowLogin: true,
      role: "student",
    };
  } else {
    return {
      allowLogin: false,
    };
  }
};
