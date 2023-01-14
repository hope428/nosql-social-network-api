const { User } = require("../models");
const { update } = require("../models/User");

module.exports = {
  //get all users
  async getUsers(req, res) {
    try {
      const results = await User.find();
      res.status(200).json(results);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getUserById(req, res) {
    try {
      const result = await User.findOne({ _id: req.params.id }).select("-__v");

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
