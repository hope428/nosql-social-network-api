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
};
