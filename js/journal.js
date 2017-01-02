function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.vowels = function () {
  return this.body.split("").filter(function(letter) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) >= 0
  }).length
};

exports.Entry = Entry;
