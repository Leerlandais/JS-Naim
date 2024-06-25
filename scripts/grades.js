const   resultWindow = document.getElementById('resultWindow'),
        scoreInp     = document.getElementById("scoreInp"),
        button       = document.querySelector("button");

button.addEventListener("click", showResult);

function showResult() {
    let scoreVal = scoreInp.value;
     //   scoreVal = scoreVal.toUpperCase();
    switch (scoreVal) {
        case 'A' :
            resultWindow.textContent = "A est Excellent";
        break;
        case 'B' :
            resultWindow.textContent = "B est Très Bien";
        break;
        case 'C' :
            resultWindow.textContent = "C est Bien";
        break;
        case 'D' :
            resultWindow.textContent = "D est Satisfasant";
        break;
        case 'F' :
            resultWindow.textContent = "E est un Echec";
        break;
        case 'PAS' :
            resultWindow.textContent = "La personne étais absente";
        break;
        default :
            resultWindow.textContent = 'error';
    }
}