const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {
    const { name, email } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);

    res.json({
        message: "User data received successfully"
    });
});

app.listen(4000, () => {
    console.log("Server...");
});