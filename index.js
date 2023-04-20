import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import "./commons/sequelize.js";
import { router as material } from "./routes/GeneralRoute.js";
import { router as organisation } from "./routes/GeneralRoute.js";
import { router as admin } from "./routes/AdminRoute.js";
import { router as mentor } from "./routes/MentorRoute.js";
import { router as student } from "./routes/StudentRoute.js";
import { router as task } from "./routes/TaskRoute.js";
import { router as group } from "./routes/GroupRoute.js";
import { router as feedback } from "./routes/FeedbackRoute.js";

const app = express();
const PORT = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// icerik tum materyaller
app.use("/api/v1/gany", material);

// Organizasyon bilgileri
app.use("/api/v1/gany", organisation);

// Admin bilgileri
app.use("/api/v1/gany", admin);

// Mentor bilgileri
app.use("/api/v1/gany", mentor);

// Student bilgileri
app.use("/api/v1/gany", student);

// Task bilgileri
app.use("/api/v1/gany", task);

// Group bilgileri
app.use("/api/v1/gany", group);

// Feedback bilgileri
app.use("/api/v1/gany", feedback);

app.listen(PORT, () => {
  console.log(`server ${PORT} portunda calisiyor`);
});
