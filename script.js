let elPara = document.querySelector("#p_txt1") 

elPara.addEventListener('click', (event) => {
    elPara.innerHTML += 'a'; 
    //Denne skal endres slik at det du faktisk skriver,
    //skal skrives inn i boksen
  
});

let elTest = document.querySelector("#test");
  
elTest.addEventListener('blur', (event) => {
    console.log("blur")
    elLabel = document.querySelector("#txtLabel");
    elLabel.innerHTML = elTest.value;
})


function theTest() {
    let elTable2 = document.querySelector("#test");
    
    elTable2.click = hmrConsole();  //?????, jeg har så mange spærsmål
}

function hmrConsole() {
    console.log("Hello World!")

}



function printFirstAndLastName() {
    const elFirst = document.querySelector("#firstname").value;
    const elLast = document.querySelector("#lastname").value

    console.log("Fist and last name: " + elFirst + elLast);
}

function showList() {
    const elNames = document.querySelectorAll(".elName");

    for (const elName of elNames) {
        if (elName.style.visibility === 'visible') {
            elName.style.visibility = 'hidden';
            
        }else{   
            elName.style.visibility = 'visible';

        }
    }
}

function addToTable(){
    const Fname = document.querySelector("#firstname");
    const Lname = document.querySelector("#lastname");
    let elTable = document.querySelector("#tableElements");

    elTable.innerHTML += '<tr> <th class="l1">' + Fname.value + '</th> <th class="l1">' + Lname.value + '</th> </tr>';

}

function removeTable() {
    let elTable = document.querySelector("#tableElements");
    elTable.lastChild.remove();
}


