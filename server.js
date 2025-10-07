const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const DB_PATH = path.join(__dirname, 'db.json');

// ---------------- Helper Functions ----------------
function readDB() {
  if (!fs.existsSync(DB_PATH))
    fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2));
  return JSON.parse(fs.readFileSync(DB_PATH));
}
function writeDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

const app = express();

// ---------------- CORS ----------------
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ---------------- BODY PARSER ----------------
app.use(bodyParser.json({ limit: '50mb' }));

// ---------------- DEMO USERS ----------------
const users = [
  { id: '1', username: 'customer1', password: 'pass', role: 'customer', name: 'Alice' },
  { id: '2', username: 'seller1', password: 'pass', role: 'seller', name: 'Bob' },
  { id: '3', username: 'trainer1', password: 'pass', role: 'trainer', name: 'Carol' },
];

// ---------------- LOGIN ----------------
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const u = users.find(x => x.username === username && x.password === password);
  if (!u) return res.status(401).json({ error: 'Invalid credentials' });

  const token = Buffer.from(`${u.id}:${Date.now()}`).toString('base64');
  res.json({ token, user: { id: u.id, username: u.username, role: u.role, name: u.name } });
});

// ---------------- GET ITEMS ----------------
app.get('/items', (req, res) => {
  const type = req.query.type;
  const db = readDB();
  let items = db.items || [];
  if (type) items = items.filter(i => i.type === type);
  res.json(items);
});

// ---------------- ADD ITEM ----------------
app.post('/items', (req, res) => {
  const { token, item } = req.body;

  if (!token) return res.status(401).json({ error: 'Missing token' });
  if (!item || !item.type || !item.name) return res.status(400).json({ error: 'Invalid item data' });

  let decoded;
  try {
    decoded = Buffer.from(token, 'base64').toString('ascii');
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  const userId = decoded.split(':')[0];
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(401).json({ error: 'Invalid user' });

  if (item.type === 'food' && user.role !== 'seller')
    return res.status(403).json({ error: 'Only sellers can add food' });
  if (item.type === 'workout' && user.role !== 'trainer')
    return res.status(403).json({ error: 'Only trainers can add workouts' });

  const db = readDB();
  const newItem = {
    id: uuidv4(),
    type: item.type,
    name: item.name,
    description: item.description || '',
    price: item.price || '',
    imageBase64: item.imageBase64 || '',
    addedBy: user.id,
    addedByName: user.name,
    createdAt: new Date().toISOString()
  };
  db.items.push(newItem);
  writeDB(db);

  res.json(newItem);
});

// ---------------- DELETE ITEM ----------------
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const token = req.headers.authorization; // ✅ read token from header

  if (!token) return res.status(401).json({ error: 'Missing token' });

  let decoded;
  try {
    decoded = Buffer.from(token, 'base64').toString('ascii');
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  const userId = decoded.split(':')[0];
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(401).json({ error: 'Invalid user' });

  const db = readDB();
  const index = db.items.findIndex(i => i.id === itemId);

  if (index === -1) {
    console.log('❌ Invalid item id:', itemId);
    return res.status(404).json({ error: 'Item not found' });
  }

  const item = db.items[index];

  if (item.addedBy !== user.id)
    return res.status(403).json({ error: 'You can only delete your own items' });

  db.items.splice(index, 1);
  writeDB(db);

  console.log(`✅ Item deleted: ${itemId} by ${user.name}`);
  res.json({ message: 'Item deleted successfully' });
});

// ---------------- START SERVER ----------------
const port = 3000;
app.listen(port, () => console.log('✅ Server running on port ' + port));
