const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello World !!");
});

app.listen(port, () => {
    console.log("Server app listening on port " + port);
});
