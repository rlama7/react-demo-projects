/**
 * Hanldes logic: create, read, update, and delete users
 */
import { v4 as uuid } from 'uuid';
import users from '../models/userModel.js';

export const getHealth = (req, res) => {
  res.status(200).json({ status: 'UserService is running' });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ message: 'Missing name or email' });

  const id = uuidv4();
  const newUser = { id, name, email };
  users.set(id, newUser);

  res.status(201).json(newUser);
};

export const getAllUsers = (req, res) => {
  res.json(Array.from(users.values()));
};

export const getUserById = (req, res) => {
  const user = users.get(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found.' });

  res.json(user);
};

export const updateUser = (req, res) => {
  const user = users.get(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found.' });

  const updatedUser = { ...user, ...req.body };
  users.set(req.params.id, updatedUser);
  res.json(updatedUser);
};

export const deleteUser = (req, res) => {
  if (!users.has(req.params.id))
    return res.status(404).json({ message: 'User not found.' });

  user.delete(req.params.id);
  res.status(204).send();
};
