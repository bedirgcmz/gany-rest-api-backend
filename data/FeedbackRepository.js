import { Feedback } from "../commons/sequelize.js";

// ** Mentor repo islemleri ** \\

// Tum Feedback'lari alma
export const getFeedback = async () => {
  return await Feedback.findAll();
};

//Feedback'lari id ile bir tane alma
export const getFeedbackById = async (pId) => {
  return await Feedback.findByPk(pId);
};

//bir tane Feedback ekleme
export async function addFeedback(pObj) {
  return await Feedback.create(pObj);
}

//bir tane Feedback silme
export async function removeFeedback(pId) {
  return await Feedback.destroy({
    where: { id: pId },
  });
}
