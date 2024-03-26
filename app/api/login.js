import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = [
  {
    id: 1,
    username: 'admin',
    password: '$2a$10$TpwtMKvM7i82X5BauVg0LuVzVo0rWJX/m0gQ9U7rRd0IKQ4yOaI/W', // Hash da senha 'admin'
  },
];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({ userId: user.id }, 'your_secret_key');
      return res.status(200).json({ token });
    });
  } else {
    return res.status(405).end();
  }
}
