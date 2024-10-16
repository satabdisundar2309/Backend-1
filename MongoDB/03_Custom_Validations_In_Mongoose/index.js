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
    unique: true,
    lowercase: true,
    trim: true,
    minLength:2,
    maxLength:15,
  },
  cType: {
    type: String,
    enum: ["frontend", "backend", "database"],
    required: true,
  },
  videos: {
    type: Number,
    //? Creating a custom validation
    validate(val){ //prevents videos count to be less than zero
        if(val<0){
            throw new Error('Videos count should not be negative');
        }
    }
  },
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
      name: "expressJS",
      cType: "backend",
      videos: 7,
      author: "satabdisundar behera",
      active: true,
    });
    const result = await playList.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

insertDoc();
