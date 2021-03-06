const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
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

export default mongoose.model('User', Schema);