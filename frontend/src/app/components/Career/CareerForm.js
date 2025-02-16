import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const response = await fetch('/api/uploadResume', {
      method: 'POST',
      body: formDataToSend,
    });

    const result = await response.json();
    console.log(result);

    // After uploading resume, submit contact details
    const contactResponse = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const contactResult = await contactResponse.json();
    console.log(contactResult);

    // Show thank you message
    setThankYouMessage('Thank you for contacting us!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
      <button type="submit">Submit</button>
      {thankYouMessage && <p>{thankYouMessage}</p>}
    </form>
  );
};

export default CareerForm; 