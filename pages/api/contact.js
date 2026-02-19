export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // In production, you would integrate with:
  // - SendGrid, Resend, or Mailgun to send an email
  // - A database to store messages
  // - Rate limiting middleware
  // For now, we log the message and return success.

  console.log('=== New Contact Form Submission ===');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('==================================');

  return res.status(200).json({
    success: true,
    message: 'Thank you for your message! I will get back to you soon.',
  });
}
