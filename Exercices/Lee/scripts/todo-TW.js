/*
// Petit fonction pour remplir vite fait le localStorage (LS) afin de commencer création du liste (l'ajout via HTML n'est pas encore ajouté) 
function runOnce() {
    let count = 0;
    for (let i = 0; i <3; i++) {
        localStorage.setItem("listItem"+i, "Item "+i);
        count++;
    }
    localStorage.setItem("listCount", count);
}
runOnce();
*/

// déclaration des nécessaires const et let
const   listContainer   = document.getElementById("listContainer"),
        noListMessage   = document.getElementById("noListMessage"),
        addItemForm     = document.getElementById("addItemForm"),
        addItemText     = document.getElementById('addItemText'),
        addItemBttn     = document.getElementById("addItemBttn");

let listCount = localStorage.getItem("listCount"),
    listArray = [];


addItemForm.addEventListener('submit', function (form) {
    form.preventDefault();
    addNewListItem();
});

function addNewListItem() {
    let newText  = addItemText.value;
    listCount++;
    localStorage.setItem("listCount", listCount);
    localStorage.setItem("listItem"+listCount, newText);
    window.location.reload();
}

function deleteListItem() {
    let btnPressed = this;
    console.log("Button : "+ btnPressed);
}



function startListCreation(list) {
 
    let i = 0;
    while (listArray.length < listCount) {
        if (localStorage.getItem("listItem"+i) != null) {
            listArray.push(localStorage.getItem("listItem"+i));           
        }else {
            console.log("listItem"+i +" is empty");
        }
        i++
    }
    console.log("list length : " + listArray.length);


    for (i = 0; i < listArray.length; i++) {
        // Création du outerDiv
        const outerDiv = document.createElement('div');
        outerDiv.className = 'outerDiv flex flex-col bg-transparent w-auto';

        // Création du innerDiv
        const innerDiv = document.createElement('div');
        innerDiv.className = 'innerDiv flex items-center w-full py-1 pl-4 pr-1 justify-center';
        innerDiv.textContent = listArray[i]

        // Ajoute innerDiv à OuterDiv
        outerDiv.appendChild(innerDiv);

        // Ajoute le bouton
        const delBtn     = document.createElement("button");
        delBtn.className = "deleteButton relative h-10 w-10 ms-8";
        delBtn.onclick = function() {
            deleteListItem(); 
        };
        innerDiv.appendChild(delBtn);
        // Append the outerDiv to the listContainer
        listContainer.appendChild(outerDiv);
      
    }
    const deleteButton = document.querySelectorAll(".deleteButton");
    console.log("delButtons : " +deleteButton.length);
    for (j = 0; j < deleteButton.length; j++) {
        const deleteImage = `<svg id="deleteBut${j}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd"></path></svg>`
        deleteButton[j].innerHTML = deleteImage;
    }

}


if (listCount != null && listCount != 0) {
    startListCreation (listArray); // lancement de la fonctionne pour démarré le création de la liste

}else {
    listCount = 0;
    noListMessage.textContent = "Pas encore d'élement dans la liste";
}




