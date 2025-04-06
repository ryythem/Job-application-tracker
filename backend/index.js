require("dotenv").config();
const express = require("express");
const DBconnection = require("./db/db.js");
const authRoute = require("./routes/auth.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

DBconnection();

app.use(express.json());
app.use(cors());

app.use('/auth',authRoute)

app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});
