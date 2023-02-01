//  L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



/****************************************************
*                                                   *
*                       CODE ON LOAD                *
*                                                   *    
* ***************************************************/
const buttonStart = document.getElementById("start-game");









/****************************************************
*                                                   *
*                       FUNCTION                    *
*                                                   *    
* ***************************************************/
// creare una funzione che costruisca la griglia creando degli elementi nel HTML
const gridEl = document.getElementById("grid");
createGrid(gridEl);


function createGrid(baluba) {

    // genero un elemento presumibilmente un div


    let quadratoSingolo = document.createElement("div");
    console.log(quadratoSingolo);
    // gli aggiungo la classe per poterlo vedere a schermo

    quadratoSingolo.classList.add("square");

    //lo aggiungo alla griglia con append

    baluba.append(quadratoSingolo);







}












