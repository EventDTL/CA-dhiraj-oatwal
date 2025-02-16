const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
const uri = process.env.MONGODB_URI;

// MongoDB connection
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the Contact model
const Contact = mongoose.model('Contact', new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
}));

// Define the Career model
const Career = mongoose.model('Career', new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  resumeUrl: String // Assuming you will store the URL of the uploaded resume
}));


// POST route to save contact data
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact information saved successfully', data: newContact });
  } catch (error) {
    console.error('Error saving contact information:', error);
    res.status(500).json({ error: 'Error saving contact information' });
  }
});

// GET route to fetch contact data
app.get('/api/getContacts', async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching contacts' });
  }
});

// POST route to save career data
app.post('/api/career', async (req, res) => {
  const { firstName, lastName, email, phone, resumeUrl } = req.body;

  try {
    const newCareer = new Career({ firstName, lastName, email, phone, resumeUrl});
    await newCareer.save();
    res.status(201).json({ message: 'Career information saved successfully', data: newCareer });
  } catch (error) {
    res.status(500).json({ error: 'Error saving career information' });
  }
});

// GET route to fetch career data
app.get('/api/getCareers', async (req, res) => {
  try {
    const careers = await Career.find({});
    res.status(200).json(careers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching career data' });
  }
});

// DELETE route to delete contact data
app.delete('/api/deleteContact/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`Attempting to delete contact with ID: ${id}`); // Log the ID
  try {
    const result = await Contact.deleteOne({ _id: id });
    console.log(result); // Log the result of the delete operation
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error); // Log any errors
    res.status(500).json({ error: 'Error deleting contact' });
  }
});

// DELETE route to delete career data
app.delete('/api/deleteCareer/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Career.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Career not found' });
    }
    res.status(200).json({ message: 'Career deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting career' });
  }
});

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// }); 
module.exports = app;