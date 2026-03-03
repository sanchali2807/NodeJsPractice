import {EventEmitter} from 'events';


// listen for events 
const emitter = new EventEmitter();

// function that run when an event is emitted

function greet(name){
    console.log("hello "+name);
}
function bye(name){
    console.log("bye "+name);
}

// register event listner
emitter.on('hi',greet);
emitter.on('goodbye',bye);

// emit events
// emitter.emit('hi');
// emitter.emit('goodbye');

// can pass arguemmts as well
emitter.emit('hi','john');
emitter.emit('goodbye','josn');