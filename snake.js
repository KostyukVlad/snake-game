var plansza = document.getElementById("plotno");
console.log(plansza);

var obszar = plansza.getContext("2d"); // tworzymy kontekst na ktorym bedziemy pracowac.
obszar.strokeStyle = "rgb(255,0,0)";
obszar.fillStyle = "rgb(0,255,0)";
obszar.fillRect(40, 40, 20, 20); //4 parametry - 1,2 - koordynaty elementu, 3,4 - wymiary( 1,3 - poziom; 2,4 pion )
/*obszar.strokeRect(260, 130, 80, 20);
obszar.strokeRect(300, 75, 10, 10);
obszar.strokeRect(195, 25, 40, 40);
obszar.fillRect(400, 30, 30, 30);
obszar.fillRect(200, 30, 30, 30);
obszar.clearRect(410, 35, 5, 5);*/
// *************************************************************************************************************************************************************************************************************************************************************************
/*siatka lub GRID*/
// ************************************************************************************
var rozmiarWeza = 20; // rozmiar elementu siatki
var pixelPoziom = plansza.width / rozmiarWeza; // сітка по ширині
var pixelPion = plansza.height / rozmiarWeza; // siatka w pionie
// ************************************************************************************
// info o wezu
// ************************************************************************************
//pocz kier ruchu
var kierunekX = 1; // idzie plus 1 w poziomie w prawo
var kierunekY = 0 // nie porusza sie w pionie

var x = 20;
var y = 10;


var snake = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }
];



function kloceklokacja() {
    var klocekX = Math.floor(Math.random() * pixelPoziom);
    var klocekY = Math.floor(Math.random() * pixelPion);




}









function catchKey(event) {
    console.log(event);


    if (event.key === "ArrowUp") {
        console.log("Stralka w gore");
        kierunekX = 0;
        kierunekY = -1;
    } else if (event.key === "ArrowDown") {
        console.log("Strzalka w dol");
        kierunekX = 0;
        kierunekY = 1;
    } else if (event.key === "ArrowLeft") {
        console.log("Strzalka w lewo");
        kierunekX = -1;
        kierunekY = 0;
    } else if (event.key === "ArrowRight") {
        console.log("Strzalka w prawo");
        kierunekX = 1;
        kierunekY = 0;
    } else {
        console.log("Uzywaj stralki");

    }


}







function blabla() {
    console.log("blabla");
}

setInterval(blabla, 1000);