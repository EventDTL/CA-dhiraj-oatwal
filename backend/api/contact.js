export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    const { firstName, lastName, email, phone, message } = req.body;
    // Your logic to save the contact
    res.status(200).json({ message: 'Contact saved successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 