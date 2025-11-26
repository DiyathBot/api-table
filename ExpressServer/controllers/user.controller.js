import User from "../models/user.js";

export const getUsers = async (_req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const created = await User.create(req.body);
    res.status(201).json({ data: created, message: "User added successfully!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.json({ data: updated, message: "User updated successfully!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.json({ ok: true, id: req.params.id, message: "User deleted successfully!" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
