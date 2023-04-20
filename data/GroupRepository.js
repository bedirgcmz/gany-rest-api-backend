//import { where } from "sequelize/types/sequelize.js";
import { Group } from "../commons/sequelize.js";

// ** Group repo islemleri ** \\

//Group toplu alma ******************
export const getGroups = async () => {
  return await Group.findAll();
};

//Mentore ait Group toplu alma ******************
export const getMentorsGroups = async (pMentorId) => {
  return await Group.findAll({ where: { mentorId: pMentorId } });
};

//Admine ait olan Group'leri getir
export const getAdminsGroups = async (pOrganisationId) => {
  return await Group.findAll({ where: { organisationId: pOrganisationId } });
};

//Group id ile alma
export const getGroupById = async (pId) => {
  return await Group.findByPk(pId);
};

//bir tane Group ekleme
export async function addGroup(pObj) {
  return await Group.create(pObj);
}
//bir Group listesi ekleme
export async function addGroupList(pList) {
  return await Group.bulkCreate(pList);
}

//bir tane Group silme
export async function removeGroup(pId) {
  return await Group.destroy({
    where: { id: pId },
  });
}
//bir Group guncelleme
export async function updateGroup(pId, pObj) {
  return await Group.update(pObj, {
    where: { id: pId },
  });
}
