const express = require("express");
const connectToMongo = require("./db"); // Make sure the path to db.js is correct
const cors = require("cors");
const path = require("path");

connectToMongo();
// Call the function to connect to MongoDB

const app = express();
const port = process.env.PORT || 5000;
const _dirname = path.resolve();
app.use(
  cors({
    origin: "https://inotebookreactapp-ffzg.onrender.com",
    credentials: true,
  })
);
require("dotenv").config();

app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use(express.static(path.join(_dirname, "./fronted/build")));
app.get("*", (_, res) => {
  res.sendFile(path.join(_dirname, "fronted", "build", "index.html"));
});
app.listen(port, () => {
  console.log(`iNotebook backend litening at http://localhost:${port}`);
});
