//Exo c'est le bordel !
let classeCoding18 = [];
function tout() {
    function ajout(parAj1) {
        return classeCoding18.push(parAj1);
        
    }
    function retire(parRet) {
        return classeCoding18.splice(classeCoding18.indexOf(parRet),1)
    }
ajout("Yassin,Farhad");
alert("Il est 8h43 Cactus arrive");
ajout("Cactus");
alert("Il est 8h44 Mihai arrive");
ajout("Mihai");
console.log(classeCoding18); //Verification
alert("Il est 8h45 Ilyas et Mohammed rejoignent la classe");
ajout("Ilyas,Mohamed");
console.log(classeCoding18); //Verification
alert("8h51 Yassin et Farhad voyent Nicolas passer devant la porte, et decident de le rejoindre")
retire("Yassin,Farhad");
console.log(classeCoding18); //Verification
alert("8h55 Tania et Oussama rentrent en classe en faisant un maximum de bruit");
ajout("TANIA,OUSSAMA");
console.log(classeCoding18); //Verification
alert("Alexis rentre en classe");
ajout("Alexis");
console.log(classeCoding18); //Verification
alert("Alexis redescend prendre sa tasse de caffé");
retire("Alexis");
console.log(classeCoding18); //Verification
alert('8h59 Issam et Anthony rentre en classe saluant tout le monde')
ajout('Issam,Anthony')
console.log(classeCoding18); //Verification
alert('9h00 Andy rentre tranquille et observe tout le monde')
ajout('Andy')
console.log(classeCoding18); //Verification
alert("9h03 Loic et Kevin rentrent et observent Mohammed qui a l'air d'etre tranquilleeee")
ajout('Loic,Kevin')
console.log(classeCoding18); //Verification
alert('9h04 Junior rentre en classe avec sa tasse de café')
ajout('Junior')
console.log(classeCoding18); //Verification
alert("9h05 Charles et William rentrent en classe tous contents de n'etre que 5 minutes en retard, Cactus leur dit qu'ils sont en retard et puis il sort")
ajout("Charles,William")
retire('Cactus')
console.log(classeCoding18); //Verification
alert('9h10 Gauthier rentre avec sa petite tasse de café et son pc, tout content et souriant')
ajout('Gauthier')
console.log(classeCoding18); //Verification
ajout('Cactus')
ajout('Nicolas')
alert("9h20 Les coachs commencent a donner cours")
console.log(classeCoding18); //Verification
alert("9h30 Beytullah rentre en faisant le minimum de bruit possible mais toute la classe la regarde par total incompréhension")
ajout("Beytullah")
console.log(classeCoding18); //Verification
}
tout()
// codingSchool18.push("Mihai");
// 
// codingSchool18.push("Ilyas","Mohammed");