const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const hospitalRoutes = require('./routes/hospitals');
const bloodBankRoutes = require('./routes/bloodBanks');
const patientRoutes = require('./routes/patients');
const authenticateToken = require('./middleware/auth');
const organDonorRoutes = require('./routes/organDonorRoutes');
const bloodDonorRoutes = require('./routes/bloodDonorRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/organ')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use route handlers
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/bloodBanks', bloodBankRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/organDonors', organDonorRoutes);
app.use('/api/bloodDonors', bloodDonorRoutes);
app.use('/api/users', userRoutes);







// Protected route example
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
