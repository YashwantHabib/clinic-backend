import express from "express";
import { prisma } from "../../lib/prisma.js";
import { authenticate } from "../../middlewares/authMiddleware.js";
import { isAdmin } from "../../middlewares/authMiddleware.js";

const allBookings = express.Router();

allBookings.get("/", authenticate, isAdmin, async (_req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: { user: true, slot: true },
    });
    res.json(bookings);
  } catch {
    res.status(500).json({ error: "Failed to retrieve all bookings" });
  }
});

export default allBookings;
