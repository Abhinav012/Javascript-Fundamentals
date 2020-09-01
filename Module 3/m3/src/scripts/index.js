
// for (let i=0; i<5; i++) { 
//   if (i === 3) 
//     continue;
//   console.log(i);
// }


//Constants

//const carId=100;
//carId = 5;


//let and var for Variables Declaration

// console.log(carId);
// var carId = 100;


// console.log(carId);
// let carId = 100;


// if(true){
//   let carId = 100;
// }

// console.log(carId);


// if(true){
//   var carId = 100;
// }

// console.log(carId);


//Rest Parameters


// function sendCars(day,...carIds){
//       carIds.forEach(id => console.log(id));
// };

// sendCars('Monday', 1,2,3);


// function sendCars(...carIds){
//   carIds.forEach(id => console.log(id));
// };

// sendCars('Monday', 1,2,3);


// function sendCars(...carIds,day){
//   carIds.forEach(id => console.log(id));
// };

// sendCars('Monday', 1,2,3);


//Destructing Arrays

// let carIds = [100,200,300];
// let [car1,car2] = carIds;

// console.log(car1,car2);


// let carIds = [100,200,300];
// let car1,car2,theRest;

// [car1,car2,...theRest] = carIds;

// console.log(car1,car2,theRest);


// let carIds = [100,200,300];
// let car1,car2,theRest;
// [,car2,...theRest] = carIds;

// console.log(car1,car2,theRest);



//Destructuring Objects

// let car = {id: 5000, style: 'convertable'};
// let {id,style} = car;

// console.log(id,style);


// let car = {id: 5000, style: 'convertable'};
// let id, style;

// ({id, style} = car);

// console.log(id, style);



//Spread Syntax

// function startCars(car1,car2,car3){
//    console.log(car1,car2,car3);
// }

// let carIds = [1,2,3];

// startCars(...carIds);



// function startCars(car1,car2,car3,...rest){
//   console.log(rest);
// }

// let carIds = [1,2,3,4,5,6];

// startCars(...carIds);



//typeOf()

// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof('Hello'));
// console.log(typeof(function(){}));
// console.log(typeof({}));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(NaN));



// Common Type Conversions


// console.log(Number.parseInt('55'));
// console.log(Number.parseInt('55ABC'));
// console.log(Number.parseFloat('55.99'));
// console.log(Number.parseFloat('55.99ABC'));
// console.log(Number.parseInt('ABC55'));


// Controlling loops


// for(let i=0; i<5; i++){
//    console.log(i);
//    if(i===3)
//      break;
// }



for(let i=0; i<5; i++){
  if(i===3)
    continue;
  console.log(i);  
}