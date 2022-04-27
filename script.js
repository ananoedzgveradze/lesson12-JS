//exercise 1

let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
  };

  console.log(user.studentstatus);

//2 exercise

let mixed = [35, 'car', '58', 'js', 74, 1000, 65, 69];

for (let item of mixed) {
    console.log(item)
};

let i = 0;
while (i < mixed.length) {
    console.log(mixed
        
        [i]);
    i++;
}

//3 exercise

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for(let number of numbers) {
    if ( number > 5 ) {
        console.log(number);
    }
}

//4 exercise

let user2 = {

    name: 'giorgi',
	age:  20,
	studentstatus: 'active'

}

if (user2.age < 18) {
    console.log('Hello');
}

else if(user2.name === 'giorgi') {
console.log('Hello Giorgi'); }

else if(user2.studentstatus === 'active' || user2. age < 25) {
    console.log('Hello World');
}

else {
    console.log('error')
}


//5 exercise
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
for (let i=0; i < array.length; i++) {
    if(typeof array[i] == "string") {
        console.log(array[i]);
    }
}

//6 exercise
let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ] ;

for (let x of array2) {
    for (let y of x) {
        if (y > 0) {
            console.log(y);
        }
    }
}

//7 exercise 

let array3 = [32, 10, 'hello', null, 'hello2', 50 ];
for (let z of array3) {
    if (typeof z === 'number' && z % 5 === 0) {
        console.log(z);
    }
}


//functions

//function exercise 1

function sum( ...args) {
    let numbersum = 0;
    for(let item of args) {
        if(item>0)
        numbersum=numbersum + item;
    }
return numbersum
}


let result= sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

//function exercise 2

function sum(...args){
    let numbersum=0;
    for(let item of args){
        numbersum=numbersum+item;
    }
    return numbersum;
}
    let result1=sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
    console.log(result);

//function exercise3

function test () {
    let user3 = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: true
    }
    if(user3.isloggedin==true) {
        console.log(user3.firstname,user3.lastname);
        }else if (user3.isloggedin==false){
        console.log('false');
        }else {
        console.log('error');
        }

        let result=test();

}

//function exercise4 

function max(numbers){
    let maxValue = 0;

    for(let item of numbers){
        if(item > maxValue){
            maxValue = item;
        }
    }
    return maxValue;
}
    console.log(max([58,47,56,24,7,600]));


