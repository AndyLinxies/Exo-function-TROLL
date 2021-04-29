//exo

let tableau = [];

function abra(a) {
    tableau.push(a);
}

function cadabra(b) {
    tableau.splice(tableau.indexOf(b), 1);
}

//c'est le bordel
abra("cactus");
abra("mihai");
abra("ilyas");
abra("mohammed");
abra("tania");
abra("oussama");
abra("alexis");
cadabra("alexis");
abra("issam");
abra("anthony");
abra("andy");
abra("loic");
abra("kevin");
abra("junior");
abra("charles");
abra("william");
cadabra("charles");
cadabra("william");
abra("gauthier");
abra("beytullah");
console.log(tableau);
