
//create your class
var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});

//After creating a class we can render it to our document like so:

React.render(
    <MyComponent/>,
    document.getElementById('myDiv')
);