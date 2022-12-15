

let jeunes = 0;
let moyens = 0;
let vieux = 0;
let age = 0;
let tab = [];
while (true) {
   age = parseInt(prompt("Entrez votre âge"));
   if (age <= 20 ){jeunes++;}
   if (age > 20 && age <= 40){moyens++;}
   if (age > 40) {vieux++;}
   if (age >=100) {tab.push(age); break; }
   else { tab.push(age)}
console.log(tab);
console.log("il y a" + jeunes + " jeunes, " + moyens + " moyens jeune, " + vieux + " vieux");
window.alert("il y a " + jeunes + " jeunes, " + moyens + " moyens jeune, " + vieux + " vieux");}

 

