import * as groupRepository from "../data/GroupRepository.js";
import * as generalRepository from "../data/GeneralRepository.js";
import * as mentorRepository from "../data/MentorRepository.js";

/* Group fetch islmeleri */

//tum Group'leri getir
export const getGroups = async () => {
  return await groupRepository.getGroups();
};

//Mentore ait olan Group'leri getir
export const getMentorsGroups = async (pMentorId) => {
  return await groupRepository.getMentorsGroups(pMentorId);
};

//Admine ait olan Group'leri getir
export const getAdminsGroups = async (pOrganisationId) => {
  return await groupRepository.getAdminsGroups(pOrganisationId);
};

// id ile bir Group getir
export const getGroupById = async (pId) => {
  return await groupRepository.getGroupById(pId);
};

//Service
//Organizasyonuna ve mentore bagli bir Group olusturma
export async function addGroupToOrganisation(pOrganisationId, pMentorId, pGroup) {
  const organisation = await generalRepository.getOrganisationById(pOrganisationId);
  const mentor = await mentorRepository.getMentorById(pMentorId);
  const newGroup = await groupRepository.addGroup(pGroup);
  await organisation.addGroup(newGroup);
  await mentor.addGroup(newGroup);
  return newGroup;
}

//bir Group olustur
export async function addGroup(pObj) {
  return await groupRepository.addGroup(pObj);
}

// Group listesi olustur
export async function addGroupList(pList) {
  return await groupRepository.addGroupList(pList);
}

// Bir Group sil
export const removeGroup = async (pId) => {
  return await groupRepository.removeGroup(pId);
};

//bir Group guncelle
export async function updateGroup(pId, pObj) {
  return await groupRepository.updateGroup(pId, pObj);
}
