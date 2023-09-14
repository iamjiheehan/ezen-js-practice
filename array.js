//map함수로 새로운 배열 만들기------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => num * 2);

// console.log(result);

//map함수로 새로운 배열 만들기2------------------------------------------------------------------------------

let arr = [10, 20, 30, 40, 50];

let newArr = arr.map((item) => {
    return item * 2;
});

// console.log(newArr); 

//map 함수로 객체 속성 출력하기------------------------------------------------------------------------------
let employees = [
    {
        id: 1,
        name: "Tommy",
        age: 23,
        city: "New York",
    },

    {
        id: 2,
        name: "Mike",
        age: 27,
        city: "Detroit",
    },

    {
        id: 3,
        name: "Lisa",
        age: 25,
        city: "Chicago",
    },
];

let names = employees.map((employee) => {
    return employee.name;
});

// console.log(names);



//백틱------------------------------------------------------------------------------

var s = `abc`; //문자열 리터럴
var name = 'Rohit Jindal';
var text = `My name is ${name}`;
// console.log('====================================');
// console.log(text);
// console.log('====================================');

//백틱2------------------------------------------------------------------------------

let arr1 = [10,20,30,40,50];
let newArr1 =  arr1.map((item, i)=>{
    // console.log(`index: ${i}`);
    // console.log('====================================');

    return item * 2;
});


function cal(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = cal(4, 7);

// document.write(`<p>Sum: ${add}</p>`);
// document.write(`<p>Differentce: ${subtract}</p>`);
// document.write(`<p>Product: ${multiply}</p>`);
// document.write(`<p>Quotient: ${divide}</p>`);

// 구조화 중첩------------------------------------------------------------------------------
const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
        city: "Houston",
        state: "Texas",
        country: "USA",
    },
};

myVehicle(vehicleOne);

function myVehicle({ model, registration: { country } }) {
    const message = `My ${model} is registered in ${country}`;
    // document.write(`<h1>${message}</h1>`)
}

//스프레드 연산자------------------------------------------------------------------------------

const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// document.write(numbersCombined);


//스프레드 연산자2------------------------------------------------------------------------------


const numbers1 = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers1;

// document.write("<p>" + one + "</p>");
// document.write("<p>" + two + "</p>");
// document.write("<p>" + rest + "</p>");


// 배열복사------------------------------------------------------------------------------

var arrName1 = ['철수','영희'];
var arrName2 = arrName1;

arrName2.push('바둑쓰');
// console.log(arrName1, arrName2);

