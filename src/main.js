$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homepage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutpage');
var Header = require('./components/common/header');

(function(win) {
  "use strict";

   var App = React.createClass({
    render: function() {
      var Child;

      switch(this.props.route) {
        case 'about': Child = About; break;
        case 'authors': Child = Authors; break;
        default: Child = Home;
      }

      return (
        <div>
          <Header/>
          <Child/>
        </div>
      );
    }
  });

  function render() {
    var route = win.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener('hashChange', render);
  render();

}(window));
