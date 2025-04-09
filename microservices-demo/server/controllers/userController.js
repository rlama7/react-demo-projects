/**
 * Hanldes logic: create, read, update, and delete users
 */
import { v4 as uuid } from 'uuid';
import users from '../models/userModel';

export const getHealth = (req, res) => [
  res.status(200).json({ status: 'UserService is running' }),
];
