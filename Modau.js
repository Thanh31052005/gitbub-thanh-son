// In ra mh
//console.log(`Hello World`);
// window.alert(`Hi !!!`); cửa sổ thông báo
//document.getElementById("myh1").textContent = "Hello Thanh";  // Thay đổi nd html

// Biến
/*let x = 10.56;
let age = 20;
console.log(typeof age);
console.log(`I am ${age} years old`);

let Food = "Pho";
let Drink = "Nuoc Cam";
console.log(typeof Food);
console.log(`I love ${Food} and drink ${Drink}`);*/

/*let DS = true;
console.log(typeof DS);
console.log(`It: ${DS}`);

let Name = "Thanh Son";
document.getElementById("myh1").textContent = Name;*/

/*let kq = 5 - 4 + 2 * 4 + 2**3;
console.log(kq); */

/*let ten;
ten = window.prompt(`What's your name:`);
document.getElementById("myh1").textContent = ten;
console.log(ten);*/

/*let username;
document.getElementById("Gui").onclick = function(){
    username = document.getElementById("Nhapvao").value;
    console.log(username);
    document.getElementById("Myh2").textContent = `Hi ${username}`;
}*/

const DEC = document.getElementById("Giam");
const INC = document.getElementById("Tang");
const RES = document.getElementById("Reset");
const PRINT = document.getElementById("myLb");

let count = 0;

DEC.onclick = function(){
    count--;
    PRINT.textContent = count;
}

INC.onclick = function(){
    count++;
    PRINT.textContent = count;
}

RES.onclick = function(){
    count = 0;
    PRINT.textContent = count;
}

let x = 3.3231312321;
console.log(Math.trunc(x));