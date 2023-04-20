import express from "express";
const router = express.Router();

import * as generalService from "../services/GeneralService.js";

/* Genel icerik materyalleri islmeleri */

//Tum materyallaeri alma
router.get("/materials", async (req, res) => {
  const list = await generalService.getMaterial();
  res.status(200).send(list);
});

//Subcategory e ait materyallaeri alma  ...?subcategoryId=12
router.get("/materialsbysubcategory", async (req, res) => {
  const subcategoryId = req.query.subcategoryId;
  const list = await generalService.getMaterialBySubcategory(subcategoryId);
  res.status(200).send(list);
});

//Yaslara ait materyallaeri alma  ...?minAge=12
router.get("/materialsage", async (req, res) => {
  const minAge = req.query.minAge;
  //const maxAge = req.query.maxAge;
  const list = await generalService.getMaterialByAge(minAge);
  res.status(200).send(list);
});

// id ile bir materyal alma
router.get("/materials/:id", async (req, res) => {
  const materialId = req.params.id;
  const material = await generalService.getMaterialById(materialId);
  res.status(200).send(material);
});

//bir materyal ekleme // /api/v1/gany/materials?organisationId=1&subcategoryId=1
router.post("/materials", async (req, res) => {
  const organisationId = req.query.organisationId;
  const subcategoryId = req.query.subcategoryId;
  const material = req.body;
  const newMaterial = await generalService.addMaterialToOrganisation(
    organisationId,
    subcategoryId,
    material
  );
  res.status(201).send(newMaterial);
});

//Materyal listesi ekleme
router.post("/materiallist", async (req, res) => {
  const material = req.body;
  const newMaterials = await generalService.addMaterialList(material);
  res.status(201).send(newMaterials);
});

// Tum organizasyon bilgilerini alma
router.get("/organisations", async (req, res) => {
  const list = await generalService.getOrganisations();
  res.status(200).send(list);
});

//bir organizasyon ekleme
router.post("/organisations", async (req, res) => {
  const organisation = req.body;
  const newOrganisation = await generalService.addOrganisation(organisation);
  res.status(201).send(newOrganisation);
});

// Tum categori bilgilerini alma
router.get("/categorys", async (req, res) => {
  const list = await generalService.getCategory();
  res.status(200).send(list);
});

// id ile bir category alma
router.get("/categorys/:id", async (req, res) => {
  const categoryId = req.params.id;
  const category = await generalService.getCategoryById(categoryId);
  res.status(200).send(category);
});

//bir category ekleme
router.post("/categorys", async (req, res) => {
  const category = req.body;
  const newCategory = await generalService.addCategory(category);
  res.status(201).send(newCategory);
});

// Tum subcategori bilgilerini alma
router.get("/subcategorys", async (req, res) => {
  const list = await generalService.getSubcategory();
  res.status(200).send(list);
});

// id ile bir subcategory alma
router.get("/subcategorys/:id", async (req, res) => {
  const subcategoryId = req.params.id;
  const subcategory = await generalService.getSubCategoryById(subcategoryId);
  res.status(200).send(subcategory);
});
//bir materyal ekleme // /api/v1/gany/subcategorys?categoryId=1
router.post("/subcategorys", async (req, res) => {
  const categoryId = req.query.categoryId;
  const subCategory = req.body;
  const newSubcategory = await generalService.addSubCategoryToCategory(categoryId, subCategory);
  res.status(201).send(newSubcategory);
});
// //bir subcategory ekleme
// router.post("/subcategorys", async (req, res) => {
//   const subcategory = req.body;
//   const newSubcategory = await generalService.addSubcategory(subcategory);
//   res.status(201).send(newSubcategory);
// });

export { router };
