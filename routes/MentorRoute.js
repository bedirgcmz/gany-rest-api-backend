import express from "express";
const router = express.Router();

import * as mentorService from "../services/MentorService.js";

/* Genel icerik materyalleri islmeleri */

//Tum Mentor'leri alma
router.get("/mentors", async (req, res) => {
  const list = await mentorService.getMentors();
  res.status(200).send(list);
});

//Login olan mentore ait student'leri alma
router.get("/mentorsadmin", async (req, res) => {
  const organisationId = req.query.organisationId;
  const list = await mentorService.getAdminsMentors(organisationId);
  res.status(200).send(list);
});

//Adminin ogrenci eklemek istedigi mentorun id sini geri dondurur
router.get("/mentorsid", async (req, res) => {
  const organisationId = req.query.organisationId;
  const mentorUserName = req.query.mentorUserName;
  const list = await mentorService.getSelectedMentorId(mentorUserName, organisationId);
  res.status(200).send(list);
});

// id ile bir Mentor alma
router.get("/mentors/:id", async (req, res) => {
  const mentorId = req.params.id;
  const mentor = await mentorService.getMentorById(mentorId);
  res.status(200).send(mentor);
});
//organizasyona dahil ederek bir Mentor ekleme  // /api/v1/gany/groups?organisationId=1
router.post("/mentors", async (req, res) => {
  const organisationId = req.query.organisationId;
  const mentor = req.body;
  const newMentor = await mentorService.addMentorToOrganisation(organisationId, mentor);
  res.status(201).send(newMentor);
});

//bir Mentor ekleme
router.post("/mentors", async (req, res) => {
  const mentor = req.body;
  const newMentor = await mentorService.addMentor(mentor);
  res.status(201).send(newMentor);
});

//Mentor listesi ekleme
router.post("/mentorlist", async (req, res) => {
  const mentors = req.body;
  const newMentors = await mentorService.addMentorList(mentors);
  res.status(201).send(newMentors);
});

//Bir Mentor silme
router.delete("/mentors/:id", async (req, res) => {
  const mentorId = req.params.id;
  await mentorService.removeMentor(mentorId);
  res.status(200).send(null);
});

//Bir Mentor guncelle
router.put("/mentors/:id", async (req, res) => {
  const mentorId = req.params.id;
  const existingMentor = req.body;
  const updatedMentor = await mentorService.updateMentor(mentorId, existingMentor);

  res.status(200).send(updatedMentor);
});

//Email ile bir admin arama (login islemi icin)
router.post("/mentors/check", async (req, res) => {
  const auth0User = req.body;
  const mentor = await mentorService.getCheckMentors(auth0User);
  res.status(200).send(mentor);
});

export { router };
