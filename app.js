var express = require('express');
var app = express();
var MsTranslator = require('mstranslator');
var client = new MsTranslator({
      client_id: "asvenus_test_2"
      , client_secret: "ORJnffaOU7C32lMbN+RhwQPyzYHE54nJExucir709os="
    }, true);
app.get('/translate', function (req, res) {
  var text = req.query.text;
  var from = req.query.from;
  var to = req.query.to;
  if(text == undefined || text == "" || from == undefined || from == "" || to == undefined || to == ""){
    res.send("parameters is missing or empty");
    console.log(req.query.to);
  }else{
    var params = {
      text: text,
      from: from,
      to: to
    };

    client.translate(params, function(err, data) {
          res.send(data);
    });
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
