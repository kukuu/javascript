/*Just like map, filter lets us:

avoid mutating an array inside a forEach or for loop
assign its result directly to a new variable, rather than push into an array we defined elsewhere

*/

// Durations are in minutes
 
var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240
 
  }
 
];

var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});
 
 console.log(difficult_tasks);