var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");

//createClass is a method that will create a new React component
class App extends React.component {
  render() {
    return <div>Heeeeey World</div>;
  }
}

ReactDOM.render(<HelloWorld />, document.querySelector("#app"));
