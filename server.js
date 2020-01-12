const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (request, response) =>
  response.json("welcome to the contact Keeper API  ")
);

//Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
