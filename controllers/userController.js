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
  async createUser(req, res){
    try {
      const newUser = await User.create(req.body)
      res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  async getUserById(req, res){
    try {
        const result = await User.findOne({_id: req.params.id})
        .select('-__v')

        res.json(result)
    } catch (error) {
        
    }
  }
};
