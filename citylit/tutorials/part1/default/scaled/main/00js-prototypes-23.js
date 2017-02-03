/* Prototype pattern as one which creates objects based on a template 
of an existing object through cloning.

We can think of the prototype pattern as 
being based on prototypal inheritance where we create objects which act as prototypes for other objects. The prototype object itself is effectively used as a blueprint for
 each object the constructor creates. If the prototype of the 
 constructor function used contains a property called name for example 
 (as per the code sample lower down), then each object created by that same constructor will
  also have this same property.

Reviewing the definitions for this pattern in existing (non-JavaScript) literature,
 we may find references to classes once again. The reality is that prototypal inheritance 
 avoids using classes altogether. There isn't a "definition" object nor a core object in theory. We're simply creating copies of existing functional objects.

One of the benefits of using the prototype pattern is that we're working with 
the prototypal strengths JavaScript has to offer natively rather than attempting
 to imitate features of other languages. With other design patterns, this isn't 
 always the case.


Not only is the pattern an easy way to implement inheritance, but 
it can also come with a performance boost as well: when defining a function in an object, 
they're all created by reference (so all child objects point to the same 
function) instead of 
creating their own individual copies.

For those interested, real prototypal inheritance, as defined in the ECMAScript 5 standard, 
requires the use of Object.create (which we previously looked at earlier in this section). 
To remind ourselves, Object.create creates an object which has a specified prototype and optionally contains specified 
properties as well (e.g Object.create( prototype, optionalDescriptorObjects )).

*/

var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};
 
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
 
// Now we can see that one is a prototype of the other
console.log( yourCar.name );

/*
Object.create also allows us to easily implement advanced concepts such as differential 
inheritance where objects are able to directly inherit from other objects. 
We saw earlier that Object.create allows us
 to initialise object properties using the second supplied argument. For example:
*/

