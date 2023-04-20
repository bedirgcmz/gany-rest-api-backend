import express from "express";
const router = express.Router();

import * as feedbackService from "../services/FeedbackService.js";

/* Genel icerik materyalleri islemleri */

//Tum Feedback'lari alma
router.get("/feedbacks", async (req, res) => {
  const list = await feedbackService.getFeedback();
  res.status(200).send(list);
});

// id ile bir Feedback alma
router.get("/feedbacks/:id", async (req, res) => {
  const feedbackId = req.params.id;
  const task = await feedbackService.getFeedbackById(feedbackId);
  res.status(200).send(task);
});

// bir Feedback olusturma
router.post("/feedbacks", async (req, res) => {
  const feedback = req.body;
  const newFeedback = await feedbackService.addFeedback(feedback);
  res.status(201).send(newFeedback);
});

//Bir Feedback silme
router.delete("/feedbacks/:id", async (req, res) => {
  const feedbackId = req.params.id;
  await feedbackService.removeFeedback(feedbackId);
  res.status(200).send(null);
});

export { router };
