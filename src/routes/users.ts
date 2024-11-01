import { Router, Request, Response } from 'express';

const router = Router();

// Simulated user database
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// Get all users
router.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// Get a single user
router.get('/users/:id', (req: Request, res: Response) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(user);
});

export default router;
