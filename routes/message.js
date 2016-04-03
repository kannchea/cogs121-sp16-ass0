var models = require("../models");

exports.send = function(req, res) { 
  
  console.log("req.body");
  
  var newMessage = new models.Message({

    email : req.body.email,
    content : req.body.content,
    created : new Date()
  
  });

  newMessage.save(function(err, savedObject){
    if(err)
      return console.log(err);
    res.redirect('/');
  });
  
}
