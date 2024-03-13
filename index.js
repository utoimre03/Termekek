import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];


// 1. feladat
function letrehozTablazat(GYUMOLCSOK) {
    let txt = "<table>"
    for (let index = 0; index < GYUMOLCSOK.length; index++) {
        txt += `
            <tr>
                <td>${GYUMOLCSOK[index].nev}</td>
                <td>${GYUMOLCSOK[index].tomeg}</td>
                <td>${GYUMOLCSOK[index].ar}</td>
            </tr> `
    } 
    txt += "</table>"
    return txt
}

const tablazatElem = document.getElementById("feladat_1");
tablazatElem.innerHTML = letrehozTablazat(GYUMOLCSOK);


// 2. feladat
function osszesit() {
    let txt = ""
    let sum = 0;
    for (let index = 0; index < lista.length; index++) {
        {sum += lista[index].tomeg} 
    }
    console.log(sum);
    return txt
}

const osszTomegELEM = document.getElementById("feladat_2")
osszTomegELEM.innerHTML = `A gyümölcsök súlya összesen: ${osszesit[GYUMOLCSOK]}`


// 3. feladat
function vasarol(zoldseg) {

}


// 4. feladat
function torolEsemeny() {

}