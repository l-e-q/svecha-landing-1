import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'leviluvpowerpuff@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // If validation passes, store the contact submission
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
        message: validatedData.message,
      });

      // Send email
      await transporter.sendMail({
        from: validatedData.email,
        to: 'leviluvpowerpuff@gmail.com',
        subject: `New Contact Form Submission - ${validatedData.service}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Service: ${validatedData.service}
Message: ${validatedData.message}
        `
      });
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        submission 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({ 
          success: false, 
          message: "Please check your form inputs and try again.",
          errors: error.errors 
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
