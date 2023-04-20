import * as mentorRepository from "../data/MentorRepository.js";
import * as generalRepository from "../data/GeneralRepository.js";

/* Mentor fetch islmeleri */

//tum Mentorleri getir
export const getMentors = async () => {
  return await mentorRepository.getMentors();
};

//Login olan admine ait Mentor'leri getir
export const getAdminsMentors = async (pOrganisationId) => {
  return await mentorRepository.getAdminsMentors(pOrganisationId);
};

//Adminin ogrenci eklemek istedigi mentorun id sini geri dondurur
export const getSelectedMentorId = async (pMentorUserName, pOrganisationId) => {
  return await mentorRepository.getSelectedMentorId(pMentorUserName, pOrganisationId);
};

// id ile bir Mentor getir
export const getMentorById = async (pId) => {
  return await mentorRepository.getMentorById(pId);
};

//bir Mentor dahil oldugu organizasyon ile olusturma
export async function addMentorToOrganisation(pOrganisationId, pMentor) {
  const organisation = await generalRepository.getOrganisationById(pOrganisationId);
  const newMentor = await mentorRepository.addMentor(pMentor);
  await organisation.addMentor(newMentor);
  return newMentor;
}

//bir Mentor olustur
export async function addMentor(pObj) {
  return await mentorRepository.addMentor(pObj);
}
// Mentor listesi olustur
export async function addMentorList(pList) {
  return await mentorRepository.addMentorList(pList);
}
// Bir Mentor olustur
export const removeMentor = async (pId) => {
  return await mentorRepository.removeMentor(pId);
};
//bir Mentor guncelle
export async function updateMentor(pId, pObj) {
  return await mentorRepository.updateMentor(pId, pObj);
}
//Email ile bir mentor arama (login islemi icin)
export const getCheckMentors = async (pUser) => {
  const isUserExisting = await mentorRepository.getCheckMentors(pUser);
  if (isUserExisting) {
    return {
      email: pUser.email,
      allowLogin: true,
      role: "Mentor",
    };
  } else {
    return {
      allowLogin: false,
    };
  }
};
