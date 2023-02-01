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

buttonStart.addEventListener(
    "click",
    function () {
        buttonStart.classList.add("button");

        // creare una funzione che costruisca la griglia creando degli elementi nel HTML

        const gridEl = document.getElementById("grid");

        let numTotGrid = 100;
        // let numTotGrid = 81;
        // let numTotGrid = 49;

        createGrid(gridEl, numTotGrid);
    }


)







/****************************************************
 *                                                   *
 *                       FUNCTION                    *
 *                                                   *    
 * ***************************************************/



function createGrid(griglia, numbers) {
    //  ho bisogno di un array per inserire i numeri nei div


    let numbersinsquare = [];
    for (let i = 0; i < numbers; i++) {
        numbersinsquare.push(i + 1);
        numbersinsquare[i] = document.createElement("h2");

    }
    // non mi basta il div che ho creato ne devo creare 100
    for (let i = 0; i < numbers; i++) {

        // genero un elemento presumibilmente un div

        let quadratoSingolo = document.createElement("div");

        // gli aggiungo la classe per poterlo vedere a schermo

        quadratoSingolo.classList.add("square");

        // do la classe active quando clicco
        // quadratoSingolo
        quadratoSingolo.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
            }
        )
        //lo aggiungo alla griglia con append


        griglia.append(quadratoSingolo);
    }
}































