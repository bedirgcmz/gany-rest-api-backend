import * as feedbackRepository from "../data/FeedbackRepository.js";

/* Feedback fetch islmeleri */

//tum Feedback leri getir
export const getFeedback = async () => {
  return await feedbackRepository.getFeedback();
};
// id ile bir Feedback getir
export const getFeedbackById = async (pId) => {
  return await feedbackRepository.getFeedbackById(pId);
};
//bir Feedback olustur
export async function addFeedback(pObj) {
  return await feedbackRepository.addFeedback(pObj);
}
// Bir Feedback sil
export const removeFeedback = async (pId) => {
  return await feedbackRepository.removeFeedback(pId);
};
