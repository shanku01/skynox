const express = require("express");
const app = express();
const path =require('path');
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join("hi"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})