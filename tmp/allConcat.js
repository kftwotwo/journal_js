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
