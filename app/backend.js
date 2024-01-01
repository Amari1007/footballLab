const express = require("express");
const app = express();

const PORT = 3333

app.listen(PORT, (req, res) => {
    console.log("football lab bac on port:", PORT)
});
