var React = require('react');
var ReactDOM = require('react-dom');


//createClass is a method that will create a new React component
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Heeeeey World</div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#app')
);
