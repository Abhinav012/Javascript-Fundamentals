
// let carIds = [ 
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'sedan' }
// ];

// let car = carIds.find( 
// 	car => car.carId > 500 
// );
// console.log(car);



// Constructor Functions


// function Car(id){
//    this.carId = id;
//    this.start = function(){
//         console.log('start: ' + this.carId);
//    };
// }

// let vehicle = new Car(123);
// vehicle.start();



// Prototype


// function Car(id){
// this.carId = id;
// }

// Car.prototype.start = function(){
//     console.log('start: '+this.carId); 
// };

// let car = new Car(123);
// car.start();



// JSON

// let jsonIn = `[
//                 {"carId": 123},
//                 {"carId": 456},
//                 {"carId": 789}
//                ]
//             `;

// let carIds = JSON.parse(jsonIn);
// console.log(JSON.stringify(carIds));            




// Array Iteration

let carIds =[
      {carId:123, style: 'seden'},
      {carId:456, style: 'convertible'},
      {carId:789, style: 'seden'}   
];

// carIds.forEach(car => console.log(car));
// carIds.forEach((car,index) => console.log(car,index));

// let convertible = carIds.filter( carId => carId.style === 'convertible');
// console.log(convertible);

// let result = carIds.every(
//     car => car.carId>0
// );
// console.log(result);


let car = carIds.find(
    car => car.carId>500
);

console.log(car);