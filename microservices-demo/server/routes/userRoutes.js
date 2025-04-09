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
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("👋 Welcome to the User Microservice API'");
});

router.get('/health', getHealth);
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
