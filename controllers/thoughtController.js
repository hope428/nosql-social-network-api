const { Thought } = require("../models");
const { User } = require("../models");

module.exports = {
  //create new thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      //add thought to user's data
      const thoughtUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: newThought._id } },
        { new: true }
      );
      res.status(201).json("Created new thought!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get single thought
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id }).select(
        "-__v"
      );
      res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // update thought
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //delete thought
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.id,
      });
      res.status(200).json(deletedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //add reaction to thought
  async addReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtid },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      res.status(200).json(newReaction);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtid },
        { $pull: { reactions: { reactionId: req.params.reactionid } } },
        {new: true}
      );
      res.status(200).json(thought)
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
