// Завдання 1

var reviewMyString = "myExempleString"; 
var regex = /^(?!.*[Aa]).{6,}$/;
console.log(regex.test(reviewMyString)); 

// Завданя 2 

var arr = [
    { userName: "Test", lastName: "Test", email: "test.test@gmail.com" },
    { userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },
    { userName: "Andrii", lastName: "", email: "andrii@mail.ru" }
];

var trustedEmailAddresses = arr
    .filter(({ email }) => /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/.test(email))
    .map(({ email }) => email);

console.log(trustedEmailAddresses);
