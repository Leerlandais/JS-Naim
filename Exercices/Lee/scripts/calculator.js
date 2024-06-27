const calcWindow = document.getElementById("calcWindow");
const button = document.querySelectorAll('button');

console.log(button.length);

function clearResult() {
    calcWindow.value = "";
}

function appendCharacter(btnPressed) {
    calcWindow.value += btnPressed;
}


// afin de reduire le code au plus petit possible, j'ai utiliser le fonction eval()
// if faut jamais utiliser ce fonction car il est très ouvert aux attaques
// quand j'ai le temps, je ferai un calc sans utilisant eval()
function calculateResult() {
    let result =
        calcWindow.value;
    try {
        result = eval(result);
        calcWindow.value = result;
    } catch (error) {
        calcWindow.value = "Something went wrong";
    }
}