(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').Entry;

$(document).ready(function() {
  $('#new-entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    $('#title').empty();
    $('#body').empty();
    $('#journal').append(`
      <div class="card cyan white-text">
        <div class="card-content">
          <span class="card-title">${entry.title}</span>
          <p>${entry.body}</p>
        </div>
      </div>`);

  });

});

},{"./../js/journal.js":1}]},{},[2]);
