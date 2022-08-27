import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import sockets from "./sockets.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

import { connectDB } from "./database/chatDB.js";
connectDB();
const server = http.createServer(app);
const httpServer = server.listen(port);
const io = new WebSocketServer(server);
sockets(io);

import routePacientes from "./routes/routePacientes.js";
import routeCalendar from "./routes/routeCalendar.js";
import { Socket } from "socket.io";


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/pacientes", routePacientes);
app.use("/calendario", routeCalendar);

app.get("/", (req, res) => {
  res.send("hola mundo");
});

console.log(`Server running on port ${port} at http://localhost:${port}/`);
