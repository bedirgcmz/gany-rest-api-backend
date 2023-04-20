import * as generalRepository from "../data/GeneralRepository.js";

/* Genel icerik materyalleri islmeleri */
//tum materyalleri getir ******************
export const getMaterial = async () => {
  return await generalRepository.getMaterial();
};

//tum materyalleri getir ******************
export const getMaterialBySubcategory = async (pSubcategoryId) => {
  return await generalRepository.getMaterialBySubcategory(pSubcategoryId);
};

//yasa gore materyalleri getir ******************
export const getMaterialByAge = async (pMinAge) => {
  return await generalRepository.getMaterialByAge(pMinAge);
};

// id ile bir materyal getir
export const getMaterialById = async (pId) => {
  return await generalRepository.getMaterialById(pId);
};
//bir materyali dahil oldugu organizasyon ile olusturma
export async function addMaterialToOrganisation(pOrganisationId, pSubcategoryId, pMaterial) {
  const organisation = await generalRepository.getOrganisationById(pOrganisationId);
  const subcategory = await generalRepository.getSubCategoryById(pSubcategoryId);
  const newMaterial = await generalRepository.addMaterial(pMaterial);
  await organisation.addMaterial(newMaterial);
  await subcategory.addMaterial(newMaterial);
  return newMaterial;
}
// materyal listesi olustur
export async function addMaterialList(pList) {
  return await generalRepository.addMaterialList(pList);
}

// Organizasyon bilgileri islemleri ********************
export const getOrganisations = async () => {
  return await generalRepository.getOrganisations();
};
//bir ornagizasyon olustur
export async function addOrganisation(pObj) {
  return await generalRepository.addOrganisation(pObj);
}

// categori islemleri *************** addSubCategoryToCategory

//tum categorileri getir
export const getCategory = async () => {
  return await generalRepository.getCategory();
};
// id ile bir category getir
export const getCategoryById = async (pId) => {
  return await generalRepository.getCategoryById(pId);
};
//bir categori olustur
export async function addCategory(pObj) {
  return await generalRepository.addCategory(pObj);
}
//tum subcategory leri getir
export const getSubcategory = async () => {
  return await generalRepository.getSubcategory();
};
// id ile bir subcategory getir
export const getSubCategoryById = async (pId) => {
  return await generalRepository.getSubCategoryById(pId);
};
//bir subCategory dahil oldugu category ile olusturma
export async function addSubCategoryToCategory(pCategoryId, pSubCategory) {
  const category = await generalRepository.getCategoryById(pCategoryId);
  const newSubCategpry = await generalRepository.addSubCategory(pSubCategory);
  await category.addSubcategory(newSubCategpry);
  return newSubCategpry;
}
// //bir subcategory olustur
// export async function addSubcategory(pObj) {
//   return await generalRepository.addSubcategory(pObj);
// }

// const data = await Organisation.findByPk(1, {
//   include: Material,
// });

//console.log(data);
