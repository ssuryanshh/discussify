const express = require("express");
require("dotenv").config();
require("./src/db/connect");
const cors = require("cors");
const http = require("http"); // Importing the http module to use with socket.io
const { Server } = require("socket.io"); // Importing the Server class from socket.io

const PORT = process.env.PORT;

const AuthRouter = require("./src/routes/Auth.Routes");
const QuestionRouter = require("./src/routes/Questions.Routes");
const AnswerRoutes = require("./src/routes/Answers.Routes");
const MentorRoutes = require("./src/routes/Mentorship.routes");

const app = express();
const server = http.createServer(app); // Creating an HTTP server with Express
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'], // Update with your frontend origin
  },
});

app.use(cors({
  origin: ['http://localhost:3000'], // Update with your frontend origin
}));
app.use(express.json());

app.use("/api/auth", AuthRouter);
app.use("/api/question", QuestionRouter);
app.use("/api/answers", AnswerRoutes);
app.use("/api/mentorship", MentorRoutes);

// WebSocket connection setup
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listening for incoming messages
  socket.on("chatMessage", (msg) => {
    console.log("Message received: ", msg);
    io.emit("chatMessage", msg); // Broadcast the message to all connected clients
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
