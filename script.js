const getMonth = ["jan", "feb", "march", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]

let rand = Math.floor(Math.random() * getMonth.length);
let randomValue = getMonth[rand]
console.log(randomValue);


