 React  Docs Support Download Blog GitHub React Native
React
A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
Get Started Download React v0.14.2
JUST THE UI
Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.

VIRTUAL DOM
React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.

DATA FLOW
React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

A Simple Component
React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

JSX is optional and not required to use React. Try clicking on "Compiled JS" to see the raw JavaScript code produced by the JSX compiler.

Live JSX EditorCompiled JS

"use strict";
 
var HelloMessage = React.createClass({
  displayName: "HelloMessage",
 
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});
 
ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), mountNode);
Hello John
A Stateful Component
In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component's state data changes, the rendered markup will be updated by re-invoking render().

Live JSX EditorCompiled JS

"use strict";
 
var Timer = React.createClass({
  displayName: "Timer",
 
  getInitialState: function getInitialState() {
    return { secondsElapsed: 0 };
  },
  tick: function tick() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount: function componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Seconds Elapsed: ",
      this.state.secondsElapsed
    );
  }
});
 
ReactDOM.render(React.createElement(Timer, null), mountNode);
Seconds Elapsed: 479
An Application
Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.

Live JSX EditorCompiled JS

 
var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});
 
ReactDOM.render(<TodoApp />, mountNode);
 
TODO

Add #1
A Component Using External Plugins
React is flexible and provides hooks that allow you to interface with other libraries and frameworks. This example uses marked, an external Markdown library, to convert the textarea's value in real-time.

Live JSX EditorCompiled JS

 
var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  rawMarkup: function() {
    return { __html: marked(this.state.value, {sanitize: true}) };
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    );
  }
});
 
ReactDOM.render(<MarkdownEditor />, mountNode);
 
Input

Type some *markdown* here!
Output
Type some markdown here!


Get Started Download React v0.14.2
A Facebook & Instagram collaboration.
Acknowledgements © 2013–2015 Facebook Inc.
Documentation licensed under CC BY 4.0.
