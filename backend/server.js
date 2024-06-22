
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = "mongodb+srv://dtillman:0p0IDEKVqpiDjNsm@appdata.uepfjxd.mongodb.net/Esoterika-Lodge?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Event model
const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const Event = mongoose.model('Event', EventSchema);

// Routes
app.post('/api/events', (req, res) => {
  const { title, description, date } = req.body;
  const newEvent = new Event({ title, description, date });
  newEvent.save()
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/api/events', async (req, res) => {
  const { page = 1, limit = 7 } = req.query;
  try {
    const events = await Event.find()
      .sort({ date: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(events);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
