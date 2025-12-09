import express from 'express';
import { registerUser, loginUser, getProfile, updateUser,deleteUser } from '../controllers/userXController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile/:id',getProfile)
router.put('/update',protect, updateUser)
router.delete('/delete',protect, deleteUser)

export default router;
