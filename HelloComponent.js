var React = require("react")
var HelloComponent = React.createClass({
    render:function(){
        return React.createElement('h1', null, 'Hello Sandeep');
    }
});
module.exports = HelloComponent;