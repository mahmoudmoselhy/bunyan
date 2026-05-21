const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 chars"],
      select: false,
    },
  },
  { timestamps: true }
);

// hash password before save
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

// compare password
adminSchema.methods.comparePassword = async function (matched) {
  return await bcrypt.compare(matched, this.password);
};

module.exports = mongoose.model("Admin", adminSchema);