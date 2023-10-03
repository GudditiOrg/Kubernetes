const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Set up body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const mongoDBURL = process.env.MONGODB_URL; // Fetch the MongoDB URL from the environment variable
mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a User schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  country: String,
  passcode: String,
});

const User = mongoose.model('User', userSchema);

// Serve the registration form page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle user registration
app.post('/register', async (req, res) => {
  try {
    const { name, username, email, country, passcode } = req.body;
    const user = new User({ name, username, email, country, passcode });
    await user.save();
    res.send('User registered successfully!');
  } catch (error) {
    res.status(500).send('Error registering user.');
  }
});

// Handle user login
app.post('/login', async (req, res) => {
  try {
    const { loginEmail, loginPasscode } = req.body;
    // Check if the user exists in the database with the provided email and passcode
    const user = await User.findOne({ email: loginEmail, passcode: loginPasscode });
    if (user) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid email or passcode.');
    }
  } catch (error) {
    res.status(500).send('Error logging in.');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
