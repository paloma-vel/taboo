var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taboolist', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// Schema
var wordSchema = mongoose.Schema({
  word: String,
  taboo: [String]
})

// Model
var Word = mongoose.model('Word', wordSchema);

var getRandomWord = (callback) => {
  Word.aggregate([{ $sample: { size: 1 } }], (err, word) => {
    if (err) {
      console.log(err);
      callback({status: "error", error: err});
    } else {
      callback({status: "ok", word: word});
    }
  })
};

module.exports = {
  getRandomWord
}