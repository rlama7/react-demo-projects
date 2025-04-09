/**
 * Connects routes to controllers
 */
import express from 'express';
import {
  getHealth,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController';

const router = express.Router();

router.get('/health', getHealth);
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
