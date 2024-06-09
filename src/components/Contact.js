import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Make POST request to submit feedback
      await axios.post('http://localhost:3000/submit-feedback', formData); 
      setSuccessMessage('Thank you for your feedback!');
      setFormData({ name: '', email: '', feedbackType: '', message: '' });
    } catch (error) {
      setError('Error submitting feedback. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen p-10 bg-Blue5 text-white">
      <div className="font-sans">
        <h2 className="text-4xl font-poppins mb-5">Contact Us</h2>
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email (optional)</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="feedbackType" className="block mb-2">Feedback Type</label>
            <select id="feedbackType" name="feedbackType" value={formData.feedbackType} onChange={handleChange} required className="w-full p-2 border rounded" style={{ color: 'black' }}>
              <option value="" style={{ color: 'black' }}>Select Feedback Type</option>
              <option value="detectionAccuracy" style={{ color: 'black' }}>Detection Accuracy</option>
              <option value="gestureInterpretation" style={{ color: 'black' }}>Gesture Interpretation</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 border rounded" style={{ color: 'black' }}></textarea>
          </div>
          <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
