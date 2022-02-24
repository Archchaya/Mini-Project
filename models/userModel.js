const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },

    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    mobileNumber: { type: String },
    portfolio: { type: String },

    about: { type: String },
    address: { type: String },

    education: { type: [],default: ['']  },
    skills: { type: [] ,default: ['']  },
    projects: { type: [] ,default: [''] },
    experience: { type: [],default: ['']  },

    appliedJobs: [],
  },
  { timestamps: true }
);

const userModal = new mongoose.model("users", userSchema);

module.exports = userModal;
