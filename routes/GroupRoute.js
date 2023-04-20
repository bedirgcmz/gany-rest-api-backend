import express from "express";
const router = express.Router();

import * as groupService from "../services/GroupService.js";

/* Genel icerik materyalleri islmeleri */

//Tum Group'leri alma
router.get("/groups", async (req, res) => {
  const list = await groupService.getGroups();
  res.status(200).send(list);
});

//Mentore ait olan Group'leri alma
router.get("/groupsofmentor", async (req, res) => {
  const mentorId = req.query.mentorId;
  const list = await groupService.getMentorsGroups(mentorId);
  res.status(200).send(list);
});

//Mentore ait olan Group'leri alma
router.get("/groupsofadmin", async (req, res) => {
  const organisationId = req.query.organisationId;
  const list = await groupService.getAdminsGroups(organisationId);
  res.status(200).send(list);
});

// id ile bir Group alma
router.get("/groups/:id", async (req, res) => {
  const groupId = req.params.id;
  const group = await groupService.getGroupById(groupId);
  res.status(200).send(group);
});

//Router
//organizasyonuna ve mentore bagli bir Group olusturma  // /api/v1/gany/groups?organisationId=1&mentorId=2
router.post("/groups", async (req, res) => {
  const organisationId = req.query.organisationId;
  const mentorId = req.query.mentorId;
  const group = req.body;
  const newGroup = await groupService.addGroupToOrganisation(organisationId, mentorId, group);
  res.status(201).send(newGroup);
});

//Group listesi ekleme
router.post("/grouplist", async (req, res) => {
  const groups = req.body;
  const newGroups = await groupService.addGroupList(groups);
  res.status(201).send(newGroups);
});

//Bir Group silme
router.delete("/groups/:id", async (req, res) => {
  const groupId = req.params.id;
  await groupService.removeGroup(groupId);
  res.status(200).send(null);
});

//Bir Group guncelle
router.put("/groups/:id", async (req, res) => {
  const groupId = req.params.id;
  const existingGroup = req.body;
  const updatedGroup = await groupService.updateGroup(groupId, existingGroup);

  res.status(200).send(updatedGroup);
});

export { router };
