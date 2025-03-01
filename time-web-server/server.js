import express from "express";


const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

app.listen(3001, () => {console.log("Server is running on port 3001")})
