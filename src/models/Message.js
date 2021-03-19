const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    TalkGroup: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TalkGroup',
      required: true
    },
    message: { 
      type: String, 
      required: true 
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Message', Schema);