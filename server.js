var app = require('./server-config.js');

var port = process.env.PORT || 4568; //check Azure for certainty

app.listen(port);

console.log('Server now listening on port ' + port);
