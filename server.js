var React = require("react"),
    myComponent =require("./HelloComponent"),
    express = require("express"),
    ReactComponent = React.createFactory(myComponent),
    expressApp = express();

expressApp.set('views', __dirname + '/views');
expressApp.set('view engine', 'ejs');

expressApp.get('', function(req, res){
   var reactComponentMarkup = ReactComponent(),
        staticMarkup = React.renderToString(reactComponentMarkup);
    //res.send(staticMarkup);
    res.render('index', { helloComponentMarkup: staticMarkup })
});

var expressServer = expressApp.listen(80, function () {
    var serverAddress = expressServer.address();
    console.log("express server started...");
    console.log("express server host name: ",serverAddress.address);
    console.log("express listening to port no: ",serverAddress.port);
});