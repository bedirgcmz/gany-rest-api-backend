import * as generalRepository from "../data/GeneralRepository.js";
import * as adminRepository from "../data/AdminRepository.js";

/* Admin fetch islmeleri */

//tum Admin'leri getir
export const getAdmins = async () => {
  return await adminRepository.getAdmins();
};
// id ile bir Admin getir
export const getAdminById = async (pId) => {
  return await adminRepository.getAdminById(pId);
};
//bir Admin olustur
export async function addAdmin(pObj) {
  return await adminRepository.addAdmin(pObj);
}

//bir Admini dahil oldugu organizasyon ile olusturma
export async function addAdminToOrganisation(pOrganisationId, pAdmin) {
  const organisation = await generalRepository.getOrganisationById(pOrganisationId);
  const newAdmin = await adminRepository.addAdmin(pAdmin);
  await organisation.addAdmin(newAdmin);
  return newAdmin;
}

// Admin listesi olustur
export async function addAdminList(pList) {
  return await adminRepository.addAdminList(pList);
}
// Bir Admin sil
export const removeAdmin = async (pId) => {
  return await adminRepository.removeAdmin(pId);
};
//bir Admin guncelle
export async function updateAdmin(pId, pObj) {
  return await adminRepository.updateAdmin(pId, pObj);
}

//Email ile bir admin arama (login islemi icin)
export const getCheckAdmins = async (pUser) => {
  const isUserExisting = await adminRepository.getCheckAdmins(pUser);
  if (isUserExisting) {
    return {
      email: pUser.email,
      allowLogin: true,
      role: "admin",
    };
  } else {
    return {
      allowLogin: false,
    };
  }
};
