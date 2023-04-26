const express = require("express");

const server = express();

//middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded())

server.listen(PORT, ()=>{
  console.log(`Server started at http://localhost:${PORT}`);
})