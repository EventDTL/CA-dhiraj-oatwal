import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get data from request body
    const { firstName, lastName, email, phone, message, subject, date, time } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone number format' });
    }

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('your_database_name');

    // Insert contact form data
    const result = await db.collection('contacts').insertOne({
      firstName,
      lastName,
      email,
      phone,
      message,
      subject: subject || 'General',
      date: date || new Date().toISOString().split('T')[0],
      time: time || new Date().toTimeString().split(' ')[0],
      createdAt: new Date(),
    });

    await client.close();

    // Send email notification (you can implement this later)
    // await sendEmailNotification({ firstName, lastName, email, message });

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: result.insertedId 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
} 