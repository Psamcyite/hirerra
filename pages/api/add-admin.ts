import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { clerkId } = req.body; // Expect clerkId to be sent in the request body

    if (!clerkId) {
      return res.status(400).json({ error: "clerkId is required" });
    }

    try {
      // Update the user with the given clerkId to have the role of ADMIN
      await prisma.user.update({
        where: { clerkId }, // Use clerkId to find the user
        data: { role: "ADMIN" }, // Update the user's role to ADMIN
      });

      res.status(200).json({ message: "User promoted to admin successfully!" });
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      res.status(500).json({ error: "Failed to promote user to admin" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
