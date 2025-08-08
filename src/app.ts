import express from "express";
import cors from "cors";
import register from "./api/auth/register.js";
import login from "./api/auth/login.js";
import getSlots from "./api/slots/getSlots.js";
import book from "./api/bookings/book.js";
import myBookings from "./api/bookings/myBookings.js";
import allBookings from "./api/bookings/allBookings.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/slots", getSlots);
app.use("/api/book", book);
app.use("/api/my-bookings", myBookings);
app.use("/api/all-bookings", allBookings);

export default app;
