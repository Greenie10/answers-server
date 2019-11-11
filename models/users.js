const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const saltRounds = 13;

export default userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.pre("save", function(next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});
