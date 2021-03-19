const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    usersJoin: { 
      type: Array,
      default: [],
      required: true
    },
    active: {
        type: Boolean,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('InteractionCard', Schema);