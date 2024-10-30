import express, { Request, Response } from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/add', async (req, res) => {
  const { username } = req.body;
  const email = `${username}@alazorgui3.wuaze.com`; // Use your domain here
  const user = new User({ username, email }); // Save email if needed
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});



router.get('/:username', async (req: any, res: any) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
