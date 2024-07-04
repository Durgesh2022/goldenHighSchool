import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT;

const db = new pg.Client({
 connectionString: process.env.POSTGRES_URL,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Middleware to log request body
function logRequestBody(req, res, next) {
  console.log(req.body);
  next();
}

app.use(logRequestBody);

// Serve index.html at the root endpoint
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Serve admission.html for admissions endpoint
app.get("/admission", async (req, res) => {
  try {
    res.sendFile(__dirname + "/public/admission.html");
  } catch (err) {
    console.error("Error serving admission.html:", err);
    res.status(500).send("Error serving admission.html");
  }
});
app.get("/people", async (req, res) => {
  try {
    res.sendFile(__dirname + "/public/people.html");
  } catch (err) {
    console.error("Error serving admission.html:", err);
    res.status(500).send("Error serving admission.html");
  }
});
app.get("/StudentLife", async (req, res) => {
  try {
    res.sendFile(__dirname + "/public/StudentLife.html");
  } catch (err) {
    console.error("Error serving admission.html:", err);
    res.status(500).send("Error serving admission.html");
  }
});

// Handle form submission
app.post("/submit", async (req, res) => {
  const { firstname, class: studentClass, lastname, dob, fathername, age, mothername, aadhaarno, mobilenumber, emailid, gender } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO admission (firstname, lastname, class, dob, fathername, age, mothername, aadhaarno, mobilenumber, emailid, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [firstname, lastname, studentClass, dob, fathername, age, mothername, aadhaarno, mobilenumber, emailid, gender]
    );
    const newAdmission = result.rows[0];
    res.send(`<h2>Admission submitted successfully!</h2><pre>${JSON.stringify(newAdmission, null, 2)}</pre>`);
  } catch (err) {
    console.error("Error inserting admission:", err);
    res.status(500).send("Error submitting admission");
  }
});

// Endpoint to fetch and display all admissions
app.get("/admissions", async (req, res) => {
  try {
    res.sendFile(__dirname + "/public/admissions.html");
  } catch (err) {
    console.error("Error serving admissions.html:", err);
    res.status(500).send("Error serving admissions.html");
  }
});

// API endpoint to fetch admissions data
app.get("/api/admissions", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM admission");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching admissions:", err);
    res.status(500).send("Error fetching admissions");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
