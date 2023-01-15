const { User } = require("../models");

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
  //create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get specific user by id
  async getUserById(req, res) {
    try {
      const result = await User.findOne({ _id: req.params.id }).select("-__v");

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //update specific user by id
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
  //delete specific user
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //add friend
  async friend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userid },
        { $addToSet: { friends: req.params.friendid } },
        { new: true }
      )
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete friend
  async unfriend(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
