module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      unique: false,
      required: false,
    },
    gender: {
      type: Number,
      unique: true,
      required: false,
    },
  });
  return mongoose.model('User', UserSchema);
};
