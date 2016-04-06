var models = require('../models');

exports.view = function(req, res) {
    //var data = {data: []};

    models.Message.find().exec(renderMessage);
   
    function renderMessage(err, message) {
      if(err)
    	return console.error(err);
      res.render('index', {'data': message});
    }
}
