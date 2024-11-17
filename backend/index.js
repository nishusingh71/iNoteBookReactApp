const express = require("express");
const connectToMongo = require("./db"); // Make sure the path to db.js is correct
const cors = require("cors");
connectToMongo();
// Call the function to connect to MongoDB

const app = express();
const port = 5000;

// app.get('/', (req, res)=>{
//     res.send('Hello Bhai');
// })
app.use(cors());
require("dotenv").config();

app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend litening at http://localhost:${port}`);
});
