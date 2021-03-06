const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },

  pollingAddress: [{
    name: {
      type: String
    },
    address: {
      type: String
    },
    distance: {
      type: Number
    }
  }],

  repDetails: [{
    name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    title: {
      type: String
    },
    party: {
      type: String
    }
  }],

  savedEvents: [{
    name: {
      type: String
    },
    date: {
      type: String
    }
  }]

});


const User = mongoose.model("User", userSchema);

module.exports = User;