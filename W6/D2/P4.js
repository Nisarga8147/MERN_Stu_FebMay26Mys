//Using the EventEmitter class
const EventEmitter = require("events");

//create a new event emitter instance
//This object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlaced" event.
//whenever the event is emitted, the function will execute
//Once() registers a listener that automatically remove itself after running for the first time
orderEmitter.once("OrderPlaced",function(orderId,Name,orderValue){
    console.log("Bill amount:",orderValue);
    console.log("Waiting for restaurant to accept order.",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Restaurant accepted order.",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Assigning delivery partner.",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Ramesh is delivering your order.",orderId);
});

//Emit the event with extra data
//The listener receives the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2300407","Nisarga",10000);
orderEmitter.emit("OrderPlaced","ORD-2300407","Nisarga",10000);