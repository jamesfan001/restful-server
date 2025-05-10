import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// router.post('/register',(req,res)=> {
//   res.status(200).json({ message: 'User registered successfully' });
// });
router.post('/register', registerUser);
// registerUser);
router.post('/login', loginUser);
// router.post('/login', (req, res) => {
//   res.status(200).json({ message: 'Login successful' });
// });
// router.get('/me', getMe);
// router.get('/me', protect, getMe);

export default router;
