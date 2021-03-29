
// Palidroma:
// - Chiedere all’utente di inserire una parola
// - Creare una funzione per capire se la parola inserita è palindroma

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





