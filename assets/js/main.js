console.log("test");

/* 
forEach oder loop 
math.round() */

body = document.querySelector("body");

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

console.log(array);

for (let i = 0; i < array.length; i++) {
    const arrayRunden = [];
    console.log(array[i]);
    console.log(array);
    arrayRunden.push(Math.round(array[i]));
    console.log(array[i]);
    console.log(arrayRunden[i]);
    console.log(arrayRunden);
    body.innerHTML += `${array[i]} <br> ==> gerundet ==> ${arrayRunden[i]} <br>`;
    console.log(i);
    body.innerHTML += `${i} - ${arrayRunden[i]}`
    document.write += `${i} - ${arrayRunden[i]}`

}
