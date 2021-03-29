
// // Palidroma:
// // - Chiedere all’utente di inserire una parola
// // - Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola e ti dirò se è palindroma');

parola = parola.toLowerCase().trim();

palindroma(parola);







/**
 * Questa funzione servirà per definire se la parola inserita dall'utente è palindroma.
 * All'interno conterrà una altra variabile che conterrà la parola inserita dall'utentte al contrario.
 * Se le due variabili sono identiche la parola è palindroma.
 * @param {word conterrà la parola inserita dall'utente} word 
 */
function palindroma(word){

    var parolaInverse = '';

    for ( var i = word.length -1; i >= 0; i-- ){
        parolaInverse += word.charAt(i);
        console.log(parolaInverse);
    }

    console.log('La parola al contrario è: ', parolaInverse);

    if(parolaInverse === word){
        console.log('La parola che hai inserito è: ', word, '.' , ' La parola è palindroma' );
    }else{
        console.log('La parola che hai inserito è: ', word, '.', 'La parola non è palindroma' );
    }
}




// Pari e Dispari
// - L’utente sceglie pari o dispari
// - e inserisce un numero da 1 a 5.
// - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// - Sommiamo i due numeri
// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// - Dichiariamo chi ha vinto.


var nomeUtente = prompt('Ciao!!Inserisci il tuo nome. Avrai la possibilità di sfidare il computer a Pari e Dispari!!');

var pariDispari = prompt('Giochiamo!...Scegli tra Pari e Dispari');

pariDispari = pariDispari.toLowerCase().trim();

var numeroUtente =parseInt( prompt('Inserisci un numero da 1 a 5') );

while (numeroUtente < 1 || numeroUtente > 5 ){

    numeroUtente =parseInt( prompt('Il valore che hai inserito è sbagliato. Inserisci un numero da 1 a 5') );

}

console.log(nomeUtente, 'hai scelto ', pariDispari);
console.log(nomeUtente, 'il numero che hai inserito è: ', numeroUtente);


var numeroComputer = generator();

console.log('Il numero scelto dal computer è: ', numeroComputer);

//La variabile risultato avra come valore TRUE ( pari, o resto 0 ) o FALSE ( dispari o resto != 0 );
var risultato = resto(numeroUtente, numeroComputer)
console.log(risultato);

if (pariDispari == 'pari'){
    switch (risultato) {
        case true:
            console.log(nomeUtente, 'Hai vinto!! La somma dei numeri è Pari');
            break;
        case false:
            console.log(nomeUtente, 'Hai perso!! La somma dei numeri è Dispari');
            break;

    }
}else{
        switch (risultato) {
            case true:
                console.log(nomeUtente, 'Hai perso!! La somma dei numeri è Pari');
                break;
            case false:
                console.log(nomeUtente, 'Hai vinto!! La somma dei numeri è Dispari');
                break;
    
    }
}







/*******************************
 * FUNZIONI
 *******************************
 */

/**
 * 
 * @returns Funzione che rende un numero generato in automatico da 1 a 5
 */
function generator(){
    var computerNumber = Math.floor(Math.random() * 5) +1;

    return computerNumber;
}



function resto(num1, num2){
    
    var somma = num1 + num2;
    
    if(somma % 2 == 0){
        return true;
    }

    return false;
}

