hello =  function () {
    return "Hello, world!"
}

hey = () => {
    return "Hey, world!"
}

hello1 = function (val) {
    return "Hello" + val;
}

hey1 = (val) => {
    return "Hello" + " " +val;
};

hey2 = val => {
    return "Hello" + " " +val;
}

let myFunction  = (a , b) => a * b;

// 일반 함수 구구단

function gugu(dan) {
    let result = "<h1>" + dan + "단 </h1>";
    for (let j = 1; j < 10; j++) {
        result += dan + " X " + j + " = " + dan * j + "<br/>";
    }
    return result;
}

document.getElementById("demo1").innerHTML = gugu(2);


// 화살표 함수 구구단

let gugu1 = dan => {
    let result = "<h1>" + dan + "단 </h1>";
    for (let j = 1; j < 10; j++) {
        result += dan + " X " + j + " = " + dan * j + "<br/>";
    }
    return result;
}

document.getElementById("demo2").innerHTML = gugu1(3);




// 일반 함수 
setTimeout (function () {
    console.log("hey");
},3000)


// 화살표 함수
setTimeout (() => {
    console.log("How are you?");
},3000)

