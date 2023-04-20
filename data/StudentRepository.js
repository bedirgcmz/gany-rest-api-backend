import { Student } from "../commons/sequelize.js";

// ** Mentor repo islemleri ** \\

//Student toplu alma ******************
export const getStudents = async () => {
  return await Student.findAll();
};
//Login olan mentore ait ogrenci listesini getirme
export const getMentorStudents = async (pMentorUserName) => {
  return await Student.findAll({ where: { mentor: pMentorUserName } });
};
//Login olan admine ait ogrenci listesini getirme
export const getAdminStudents = async (pOrganisationId) => {
  return await Student.findAll({ where: { organisationId: pOrganisationId } });
};
//Student id ile alma
export const getStudentById = async (pId) => {
  return await Student.findByPk(pId);
};
//bir tane Student ekleme
export async function addStudent(pStudent) {
  return await Student.create(pStudent);
}
//bir Student listesi ekleme
export async function addStudentList(pList) {
  return await Student.bulkCreate(pList);
}

//bir tane Student silme
export async function removeStudent(pId) {
  return await Student.destroy({
    where: { id: pId },
  });
}
//bir Student guncelleme
export async function updateStudent(pId, pObj) {
  return await Student.update(pObj, {
    where: { id: pId },
  });
}
//Email ile bir Student arama (login islemi icin)
export const getCheckStudents = async (pUser) => {
  const emailCount = await Student.count({
    where: { email: pUser.email },
  });
  return emailCount == 0 ? false : true;
};
