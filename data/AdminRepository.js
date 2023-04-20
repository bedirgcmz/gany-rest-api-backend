import { Admin } from "../commons/sequelize.js";

// ** Admin repo islemleri ** \\

//Admin toplu alma ******************
export const getAdmins = async () => {
  return await Admin.findAll();
};
//Admin id ile alma
export const getAdminById = async (pId) => {
  return await Admin.findByPk(pId);
};
//bir tane Admin ekleme
export async function addAdmin(pObj) {
  return await Admin.create(pObj);
}
//bir Admin listesi ekleme
export async function addAdminList(pList) {
  return await Admin.bulkCreate(pList);
}

//bir tane Admin silme
export async function removeAdmin(pId) {
  return await Admin.destroy({
    where: { id: pId },
  });
}
//bir Admin guncelleme
export async function updateAdmin(pId, pObj) {
  return await Admin.update(pObj, {
    where: { id: pId },
  });
}
//Email ile bir admin arama (login islemi icin)
export const getCheckAdmins = async (pUser) => {
  const emailCount = await Admin.count({
    where: { email: pUser.email },
  });
  return emailCount == 0 ? false : true;
};
