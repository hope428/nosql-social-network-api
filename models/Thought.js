const {Schema, model} = require("mongoose");
const Reaction = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: [1],
      max: [280],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) =>  date.toISOString().split("T")[1].split(".")[0]
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = new model("thought", thoughtSchema);

module.exports = Thought;
