import { Material, Organisation, Category, Subcategory } from "../commons/sequelize.js";
import { Op } from "sequelize";

// ** materyal islemleri ** \\

//materyalleri toplu alma
export const getMaterial = async () => {
  return await Material.findAll();
};
//materyalleri subcategory e gore toplu alma
export const getMaterialBySubcategory = async (pSubcategoryId) => {
  return await Material.findAll({ where: { subcategoryId: pSubcategoryId } });
};
//materyalleri age degerine gore toplu alma
export const getMaterialByAge = async (pMinAge) => {
  return await Material.findAll({
    where: {
      min_age: { [Op.gte]: pMinAge },
      // [Op.and]: {
      //   min_age: { [Op.gte]: pMinAge },
      //   max_age: { [Op.lte]: pMaxAge },
      // },
    },
  });
};

//materyalleri id ile alma
export const getMaterialById = async (pId) => {
  return await Material.findByPk(pId);
};
//bir tane materyal ekleme
export async function addMaterial(pObj) {
  return await Material.create(pObj);
}
//bir materyal listesi ekleme
export async function addMaterialList(pList) {
  return await Material.bulkCreate(pList);
}

//** organizasyonlari islemleri **\\
export const getOrganisations = async () => {
  return await Organisation.findAll();
};
//bir tane organizasyon ekleme
export async function addOrganisation(pObj) {
  return await Organisation.create(pObj);
}
//org id ile alma
export const getOrganisationById = async (pId) => {
  return await Organisation.findByPk(pId);
};

//** categori ve sub category islemleri **\\

//categorileri alma
export const getCategory = async () => {
  return await Category.findAll();
};
//subcategorileri alma
export const getCategoryById = async (pId) => {
  return await Category.findByPk(pId);
};
//bir tane category ekleme
export async function addCategory(pObj) {
  return await Category.create(pObj);
}
//subcategorileri alma
export const getSubcategory = async () => {
  return await Subcategory.findAll();
};
//subcategorileri alma
export const getSubCategoryById = async (pId) => {
  return await Subcategory.findByPk(pId);
};
//bir tane subCategory ekleme
export async function addSubCategory(pObj) {
  return await Subcategory.create(pObj);
}
