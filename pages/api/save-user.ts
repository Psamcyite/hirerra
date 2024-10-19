// pages/api/save-user.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { clerkId, email }: { clerkId: string; email: string | { emailAddress: string } } = req.body;

    if (!clerkId || !email) {
      return res.status(400).json({ error: "clerkId and email are required" });
    }

    // Extract the email string if it's an object
    const emailString = typeof email === 'string' ? email : email.emailAddress;

    try {
      // Check if a user with the same email already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: emailString }, // Use the string value
      });

      if (existingUser) {
        return res.status(409).json({ error: "User with this email already exists" }); // 409 Conflict
      }

      // Save the new user to the database
      await prisma.user.create({
        data: {
          clerkId,  // Clerk user ID
          email: emailString, // Use the extracted email string
          password: "defaultPassword", // Default password (should be securely generated)
          role: "USER", // Default role
        },
      });

      res.status(200).json({ message: "User saved successfully" });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Failed to save user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
