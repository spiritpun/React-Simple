// JSX
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement('h1', { id: "component" }, "This is React component.");

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);