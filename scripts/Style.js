//Function to Style the Page

//Function to set Type Box Background Color
function TypeBackground() {
    const DivBox = document.getElementsByClassName("DivBox"); //Get the div box
    for (let i = 0; i < DivBox.length; i++) {
        var TypeValue = DivBox[i].innerHTML;
        if (TypeValue == "Grass") {
            DivBox[i].style.backgroundColor = "rgb(98, 161, 61)";
        } else if (TypeValue == "Fire") {
            DivBox[i].style.backgroundColor = "rgb(238, 129, 48)";
        } else if (TypeValue == "Water") {
            DivBox[i].style.backgroundColor = "rgb(99, 144, 240)";
        } else if (TypeValue == "Bug") {
            DivBox[i].style.backgroundColor = "rgb(128, 143, 19)";
        } else if (TypeValue == "Poison") {
            DivBox[i].style.backgroundColor = "rgb(163, 62, 161)";
        } else if (TypeValue == "Normal") {
            DivBox[i].style.backgroundColor = "rgb(168, 167, 122)";
        } else if (TypeValue == "Flying") {
            DivBox[i].style.backgroundColor = "rgb(133, 113, 190)";
        } else if (TypeValue == "Dark") {
            DivBox[i].style.backgroundColor = "rgb(112, 87, 70)";
        } else if (TypeValue == "Electric") {
            DivBox[i].style.backgroundColor = "rgb(207, 154, 9)";
        } else if (TypeValue == "Ground") {
            DivBox[i].style.backgroundColor = "rgb(177, 149, 79)";
        } else if (TypeValue == "Fairy") {
            DivBox[i].style.backgroundColor = "rgb(214, 133, 173)";
        } else if (TypeValue == "Psychic") {
            DivBox[i].style.backgroundColor = "rgb(249, 85, 135)";
        } else if (TypeValue == "Fighting") {
            DivBox[i].style.backgroundColor = "rgb(194, 46, 40)";
        } else if (TypeValue == "Rock") {
            DivBox[i].style.backgroundColor = "rgb(182, 161, 54)";
        } else if (TypeValue == "Steel") {
            DivBox[i].style.backgroundColor = "rgb(140, 140, 158)";
        } else if (TypeValue == "Ice") {
            DivBox[i].style.backgroundColor = "rgb(101, 161, 158)";
        } else if (TypeValue == "Ghost") {
            DivBox[i].style.backgroundColor = "rgb(115, 87, 151)";
        } else if (TypeValue == "Dragon") {
            DivBox[i].style.backgroundColor = "rgb(111, 53, 252)";
        }
    }
}

//Function to check Hidden Ability & set style class
function HiddenAbility() {
    var table, rows, Mon;
    table = document.getElementById("SpeciesTable");
    rows = table.getElementsByTagName("tr");
    //Array for list of mon which 2nd ability is normal
    Mon = [];
    //Loop through all rows
    for (let i = 1; i < rows.length; i++) {
        //Get the available Ability
        x = rows[i].getElementsByTagName("td")[2];
        y = rows[i].getElementsByTagName("td")[4];
        z = y.getElementsByTagName("div");
        if (Mon.includes(x.innerText)) {
            z[1].setAttribute("class", "AbilityBox")
        }
    }
}