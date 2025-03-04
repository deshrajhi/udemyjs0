// 'use strict';

/*const bookings = [];

const createBooking = function(flightNum,
    numpassengers, price){


     price = 199 * numpassengers;

     
        //es5
    //  numpassengers = numpassengers || 1;
    //  price = price || 199;


        const  booking = {
            flightNum,
            numpassengers,
            price,
        };
        console.log(booking);
        bookings.push(booking)
    }

    createBooking('LH123');
    createBooking('LH123',2,800);
    createBooking('LH1234',5);

    createBooking('LH123', undefined,1000);
    */


    //. How Passing Arguments Works: Value vs. References

    /*const flight = 'LH234';
    const jonas = {
        name: 'Jonas Schemedtmann',
        passport: 24739479284
    }

    const checkIn = function(flightNum, passenger){
           flightNum = 'LH999';
           passenger.name = 'Mr.' + passenger.name;

           if(passenger.passport === 24739479284){
            alert('CheckIn in');
           }else{
            alert('Wrong passport');
           }
    }

    checkIn(flight, jonas);
    console.log(flight);
    console.log(jonas);

    //Is the same as doing
    const flightNum = flight;
    const passenger = jonas


    const newPassport = function(person){
        person.passport = Math.trunc(Math.random() + 100000000000);
    }

    newPassport(jonas);
    checkIn(flight, jonas);
*/



//Higher order function

// const greeet = () => console.log('Hey jonas');
// btnClose.addEventListener('click', greeet);



//function accepting callback function

/*const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
}

//higher-order function
const transformer = function(str, fn)
{
console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn(str)}`);
console.log(`Trasnformed by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);

const high5 = function () {
    console.log('👋 ');

}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


*/


//functions returning function
/*const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/



//the call and apply methods
/*const lufthansa = {
    airline: 'Lufthansa',
    iataCode:'LH',
    bookings:[],
    //book: function()()
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline}  flight ${this.iataCode0} ${flightNum} `

        );
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
      },
};

lufthansa.book(239, 'Jonas Schedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
//Does Not work
//Book(23, 'Sarah Williams');


//call method
book.call(eurowings, 23, 'Sarah  Williams');
console.log(eurowings);


book.call(lufthansa,239, 'Mary Cooper');
console.log(lufthansa);
const swiss = {
    airline:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

book.call(swiss,583, 'Mary Cooper');
console.log(swiss);


//Apply Method
const flightData = [583, 'George Copper'];
book.apply(swiss, flightData);
console.log(swiss);


book.call(swiss, ...flightData);


//The bind method
// book.call(eurowings,23, 'Sarah williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23,'Steven williams');


const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schemedtmann');
bookEW23('Martha Copper');


//with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click' , lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + rate;
console.log(addTax(0.1,200));


const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value + 0.23;


console.log(addVAT(100));
console.log(addVAT(100));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

*/

//challenge
/*const poll ={
    questions:'What is your favourite programming language?',
    options:['0: javascript', '1: Python', '2: Rust','3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(
            prompt(`${this.questions}\n${this.options.join('\n')}
            \n(write option number)`
        )
        );
        console.log(answer);
        //Register answers
        typeof answer === 'number' && answer <
         this.answers.length && this.answers[this.answers]++;
        console.log(this.answers);

         this.displayResults();
         this.displayResults('string');
    },
    displayResults(type = 'array'){
        if(type === 'array') {
            console.log(this.answers);
            
        }else if(type === 'string'){
           console.log(`poll results are 
            ${this.answers.join(',')}`)
        }
    }

};
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', 
    poll.registerNewAnswer.bind(poll));


    poll.displayResults.call({answers: [5,2,3]}, 'string');
    poll.displayResults.call({answers: [1,5,3,9,6,1]}, 'string');
  poll.displayResults.call({answers: [1,5,3,9,6,1]});
*/


//Immediately Invoked Function Expressions (IIFE)

/*const runOnce = function (){
    console.log('This will never run again');

};
runOnce();

//IIFE
(function (){
    console.log('this will never run again');
    const isPrivate = 23;

})();
 
//  console.log(isPrivate);
(() => console.log('This will also never again'))
();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

//closures

/*const secureBooking = function(){
    let passenger = 0;


    return function(){
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

*/

// more Closures example 

//Example 1
let f;

const g = function() {
    const a = 23;
    f = function(){
      console.log(a*2);  
    };
};


const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
}

g();
f();

// Re- assigining f function
h();
f();
console.dir(f)

//Example 2
const boardPassengers = function(n, wait){
    const perGroup = n/3;
    setTimeout(function () {
        console.log(` We are now barding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);

    }, wait = 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180,3);

















