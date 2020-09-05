
// let trackCar = function(city='NY', carId) {
//   console.log(`Tracking ${carId} in ${city}.`);
// };

// console.log( trackCar(123) ); 

// console.log( trackCar(123, 'Chicago'));


// Function Scope


// function startCar(carId){
//      let message = 'Starting...';
// }
// startCar(123); 
// console.log(message);


// function startCar(carId){
//   let message = 'Starting...';
//   let startFn = function turnKey(){
//     console.log(message);
//   };
//   startFn();
// }
// startCar(123); 



// function startCar(carId){
//   let message = 'Starting...';
//   let startFn = function turnKey(){
//     let message = 'Override';
//   };
//   startFn();
//   console.log(message);
// }
// startCar(123); 



// Block Scope


// let message = 'Outside';
// if(5===5){
//   let message = 'Equal';
//   console.log(message);
// }
// console.log(message);



// IIFE


// (function(){
//   console.log('in function');
// })();


// let app = (function(){
//     let carId = 123;
//     console.log('in function');
//     return {};
// })();

// console.log(app);



// Closure


// let app = (function(){
//     let carId = 123;
//     let getId = function(){
//       return carId;
//     };
//     return {
//       getId: getId
//     };
// })();
//console.log(app.getId());



// this Keyword


// let o = {
//       carId: 123,
//       getId: function(){
//         console.log(this);
//         return this.carId;
//       }
// };

// console.log(o.getId() );


// call and apply


// let o = {
//   carId: 123,
//   getId: function(prefix){
//     return prefix+this.carId;
//   }
// };
// let newCar = { carId: 456 };
// console.log(o.getId.apply(newCar, ['ID: ']));


// let o = {
//   carId: 123,
//   getId: function(){
//     return this.carId;
//   }
// };
// let newCar = { carId: 456 };
// console.log(o.getId.call(newCar));



// bind



// let o = {
//   carId: 123,
//   getId: function(){
//     return this.carId;
//   }
// };
// let newCar = { carId: 456 };

// let newFn = o.getId.bind(newCar);

// console.log( newFn() );



// Arrow Functions


// let getId = (prefix,suffix) => (prefix + 123 + suffix);
// console.log(getId('ID: ','!'));


// let getId = (prefix,suffix) => {
//     return prefix + 123 + suffix;
// };

// console.log(getId('ID: ', '!'));


// let getId = () => 123;
// console.log(getId());


// let getId = _ => 123;
// console.log(getId());



// Default Parameters

let trackCar = function(carId, city = 'NY'){
  console.log(`Tracking ${carId} in ${city}.`);
};

console.log(trackCar(123));
console.log(trackCar(456,'chicago'));