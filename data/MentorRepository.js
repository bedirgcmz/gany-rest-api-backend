import { Mentor } from "../commons/sequelize.js";
import { Op } from "sequelize";

// ** Mentor repo islemleri ** \\

//Mentor toplu alma ******************
export const getMentors = async () => {
  return await Mentor.findAll();
};
//Login olan admine ait Mentor listesini getirme
export const getAdminsMentors = async (pOrganisationId) => {
  return await Mentor.findAll({ where: { organisationId: pOrganisationId } });
};
//Adminin ogrenci eklemek istedigi mentorun id sini geri dondurur
export const getSelectedMentorId = async (pMentorUserName, pOrganisationId) => {
  return await Mentor.findAll({
    where: {
      [Op.and]: {
        user_name: { [Op.eq]: pMentorUserName },
        organisationId: { [Op.eq]: pOrganisationId },
      },
    },
  });
};
//Mentor id ile alma
export const getMentorById = async (pId) => {
  return await Mentor.findByPk(pId);
};
//bir tane mentor ekleme
export async function addMentor(pObj) {
  return await Mentor.create(pObj);
}
//bir mentor listesi ekleme
export async function addMentorList(pList) {
  return await Mentor.bulkCreate(pList);
}

//bir tane mentor silme
export async function removeMentor(pId) {
  return await Mentor.destroy({
    where: { id: pId },
  });
}
//bir mentor guncelleme
export async function updateMentor(pId, pObj) {
  return await Mentor.update(pObj, {
    where: { id: pId },
  });
}
//Email ile bir mentor arama (login islemi icin)
export const getCheckMentors = async (pUser) => {
  const emailCount = await Mentor.count({
    where: { email: pUser.email },
  });
  return emailCount == 0 ? false : true;
};
