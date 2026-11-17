import { Resend } from "resend";

// Helper to escape HTML characters to prevent HTML injection in emails
function escapeHtml(text) {
  if (typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Only POST is accepted.",
    });
  }

  // Verify Resend API Key is set
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY in environment variables.");
    return res.status(500).json({
      success: false,
      message: "Email service is temporarily unconfigured. Please try again later.",
    });
  }

  try {
    const { name, email, subject, message, website } = req.body || {};

    // 1. Honeypot check for spam bots
    if (website && website.trim() !== "") {
      // Silently return success to mislead bots
      return res.status(200).json({ success: true, message: "Message sent successfully!" });
    }

    // 2. Required fields presence check
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (Name, Email, Subject, Message).",
      });
    }

    // 3. Length and sanity validation
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (
      trimmedName.length > 100 ||
      trimmedEmail.length > 254 ||
      trimmedSubject.length > 200 ||
      trimmedMessage.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid form input or character limit exceeded.",
      });
    }

    // 4. Initialize Resend client
    const resend = new Resend(apiKey);

    // Safe escaped text for HTML format
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeSubject = escapeHtml(trimmedSubject);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br/>");

    // 5. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["karthikrao1004@gmail.com"],
      replyTo: trimmedEmail,
      subject: `Portfolio Contact - ${trimmedSubject}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin-top: 0; font-weight: bold; color: #475569;">Message:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0; color: #1e293b;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to deliver email through Resend.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
      id: data?.id,
    });
  } catch (err) {
    console.error("Unexpected error in /api/send:", err);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while sending your message.",
    });
  }
}
