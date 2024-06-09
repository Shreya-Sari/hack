import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define a route to handle feedback submissions
app.post('/submit-feedback', (req, res) => {
  const feedbackData = req.body;
  // Implement logic to store feedback data in your database or other storage system
  console.log('Received feedback:', feedbackData);
  // Respond with a success message
  res.status(200).json({ message: 'Feedback submitted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
