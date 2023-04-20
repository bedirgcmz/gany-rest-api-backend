import express from "express";
const router = express.Router();

import * as adminService from "../services/AdminService.js";

/* Genel icerik materyalleri islmeleri */

//Tum Admin'leri alma
router.get("/admins", async (req, res) => {
  const list = await adminService.getAdmins();
  res.status(200).send(list);
});

// id ile bir Admin alma
router.get("/admins/:id", async (req, res) => {
  const adminId = req.params.id;
  const admin = await adminService.getAdminById(adminId);
  res.status(200).send(admin);
});

//organizasyonu ile bir admin ekleme // /api/v1/gany/materials?organisationId=1
router.post("/admins", async (req, res) => {
  const organisationId = req.query.organisationId;
  const admin = req.body;
  const newAdmin = await adminService.addAdminToOrganisation(organisationId, admin);
  res.status(201).send(newAdmin);
});

// //bir Admin ekleme
// router.post("/admins", async (req, res) => {
//   const admin = req.body;
//   const newAdmin = await adminService.addAdmin(admin);
//   res.status(201).send(newAdmin);
// });

//Admin listesi ekleme
router.post("/adminlist", async (req, res) => {
  const admins = req.body;
  const newAdmins = await adminService.addAdminList(admins);
  res.status(201).send(newAdmins);
});

//Bir Admin silme
router.delete("/admins/:id", async (req, res) => {
  const adminId = req.params.id;
  await adminService.removeAdmin(adminId);
  res.status(200).send(null);
});

//Bir Admin guncelle
router.put("/admins/:id", async (req, res) => {
  const adminId = req.params.id;
  const existingAdmin = req.body;
  const updatedAdmin = await adminService.updateAdmin(adminId, existingAdmin);

  res.status(200).send(updatedAdmin);
});

//Email ile bir admin arama (login islemi icin)
router.post("/admins/check", async (req, res) => {
  const auth0User = req.body;
  const admin = await adminService.getCheckAdmins(auth0User);
  res.status(200).send(admin);
});

export { router };
