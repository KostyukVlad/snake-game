var plansza = document.getElementById("plotno");
console.log(plansza);

var obszar = plansza.getContext("2d"); // tworzymy kontekst na ktorym bedziemy pracowac.
obszar.strokeStyle = "rgb(255,0,0)";
obszar.fillStyle = "rgb(0,255,0)";
obszar.strokeRect(250, 120, 100, 40); //4 parametry - 1,2 - koordynaty elementu, 3,4 - wymiary( 1,3 - poziom; 2,4 pion )
obszar.strokeRect(260, 130, 80, 20);
obszar.strokeRect(300, 75, 10, 10);
obszar.strokeRect(195, 25, 40, 40);
obszar.fillRect(400, 30, 30, 30);
obszar.fillRect(200, 30, 30, 30);
obszar.clearRect(410, 35, 5, 5)

function blabla() {
    console.log("blabla");
}

setInterval(blabla, 1000);