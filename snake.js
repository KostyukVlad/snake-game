var plansza = document.getElementById("plotno");
console.log(plansza);

var kontekst = plansza.getContext("2d");
kontekst.strokeStyle = "rgb(255,0,0)";
kontekst.fillStyle = "rgb(0,255,0)";
kontekst.strokeRect(100, 100, 100, 100);
kontekst.fillRect(700, 30, 30, 30);