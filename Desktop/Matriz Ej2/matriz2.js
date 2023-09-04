const divTablero = document.querySelector("#tablero");
const input1 = document.querySelector("#opcion-1");
const input2 = document.querySelector("#opcion-2");



const MIN = 1;
const MAX = 8;


function generar() {

    divTablero.innerHTML = "";

    const MAX_FILA = input1.value;
    const MAX_COL = input2.value;

    for (let fila = 0; fila < MAX_FILA; fila++) {

        divTablero.innerHTML += `
    <div class="row">
        ${agregarColumna()}
    </div>
    `
        if ((MAX_FILA == MAX) && (MAX_COL == MAX)) {
            divTablero.innerHTML += `
            <div class="row">
                ${cambiaColor()}
            </div>
            `

        }
    }






    function agregarColumna() {
        let columnas = "";
        for (let col = 0; col < MAX_COL; col++) {
            columnas += `
        <div class="col casilla">
        </div>`;

        }
        return columnas;
    }


    function cambiaColor() {
        let columnas = "";
        for (let col = 0; col < MAX_COL; col++) {
            columnas += `
        <div class="columna casilla ">
        </div>`;

        }
        columnas = MAX;

        return columnas;
    }

}
function alerta() {

    alert("La posicion es")
}
