const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/ttchannel";
mongoose
  .connect(url)
  .then(() => {
    console.log("connection estlabished");
  })
  .catch(() => {
    console.log("Error occured");
  });

const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, //unique is not a validator in mongoose but it acts like a validator (e.g. used in usernames etc...)
    lowercase: true, //validator, it converts the value of the name field to lowercase
    trim: true, //validator, trims the leading and trailing white spaces
    minLength:2, //sets minimum length of name field to 2 - if not shows error
    // minLength:[2,"Minimum 2 letters"], //to add custom error message
    maxLength:15, //sets max length to 15
  },
  cType: {
    type: String,
    enum: ["frontend", "backend", "database"], //course type can be one of these three only
    required: true,
  },
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const playListModel = mongoose.model("playlist", playListSchema);

const insertDoc = async () => {
  try {
    const playList = new playListModel({
      name: "AdoBe PhotoShop",
      cType: "graphic design",
      videos: 9,
      author: "satabdisundar behera",
      active: false,
    });
    const result = await playList.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

insertDoc();
