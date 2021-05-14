//1

let h2Rec = document.querySelector('h2');

console.log(h2Rec.innerText);
//2
let temp;
let h2Mod = 'exo1'; 
temp = h2Mod;
let h2rec = temp;

console.log(h2rec);

//3

let p = document.querySelectorAll('p')[0];
p.innerText = " rajoute y la ligne js utilisé pour résoudre l'exercice 2."
console.log(p);

//4

let id = document.querySelector('section').getAttribute('id');

console.log(id);

//5

let h1 = document.getElementsByTagName("h1")[0].className;

console.log(h1);

//6


let each = Array.from(document.querySelectorAll("h1"));


console.log(each);

each.forEach(e => {

    e.className;

});


//7

let input = document.getElementsByTagName("input")[0].getAttribute;

console.log(input);

//8

//Exo1
let h2Rec = document.querySelector('h2');

console.log(h2Rec.innerText);

//Exo2
h2Rec.innerText = "exo1";

//Exo3

let p = h2Rec.nextElementSibling;
console.log(p);
p.innerText = `h2Rec.innerText = "exo1";`;

//Exo 4
let premiereSection = document.querySelector('section');
console.log(premiereSection.id);

//Exo 5
let premiereH1 = document.querySelector('h1');
console.log(premiereH1.className);
console.log(premiereH1.classList);
console.log(premiereH1.getAttribute('class'));

//Exo 6
let listequiestpasliste = document.querySelectorAll('h1');
listequiestpasliste.forEach(element => {
    console.log(element.className);
});

//Exo 7
let premierInput = document.querySelector('input');
console.log(premierInput.attributes);

//Exo 8
console.log(premierInput.getAttribute('type'));

//Exo 9
let inputPass3 = document.querySelector('input#inputPassword3');
inputPass3.setAttribute('type','password');
console.log(inputPass3);

//Exo 10
premierInput.setAttribute('type','color');
console.log(premierInput.type);