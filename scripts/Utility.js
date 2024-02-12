//Reusable & UI Function
//Function to split 2 words string

function splitFunc(x) {
    try {
        const y = x.split(/, |; /);
        return y;
    } catch(err) {
        return [x]
    }
}

function splitAbility(x) {
    try {
        const y = x.split("; ");
        if (y != x) {
            return true
        }
    } catch(err) {
        return false
    }
}
//Function to Sort Table Data
function SortTable(n) {
    let table = document.getElementById("DexTable");
    var rows, i, x, y, count = 0;
    var switching = true;
    var direction = "ascending";
    // Run loop until no switching is needed
    while (switching) {
        switching = false;
        var rows = table.rows;
        //Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false;
            //Get 2 elements that need to be compared
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            //Check Data Type to be sorted
            if (Number.isInteger(Number(x.innerHTML)) == false) { //String value
                //Check the direction of order
                if (direction == "ascending") {
                    // Check if 2 rows need to be switched
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        Switch = true;
                    }
                } else if (direction == "descending") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        Switch = true;
                    }
                }
            } else if (Number.isInteger(Number(x.innerHTML)) == true) { //Integer value
                if (direction == "ascending") {
                    //Check if 2 rows need to be switched
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        Switch = true;
                    }
                } else if (direction == "descending") {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        Switch = true;
                    }
                }
            }
        if (Switch == true) {
            //Function to switch the row and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            count++;
        } else if (Switch == false){
            //Run while loop again for descending order
            if (count == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
        }
    }
}

//Function to search Value from Search Bar
function Search() {
    var SearchBar, SearchValue, table, rows, DataValue;
    SearchBar = document.getElementById("SearchBar");
    SearchValue = SearchBar.value.toLowerCase();
    table = document.getElementById("DexTable");
    rows = table.getElementsByTagName("tr");
    
    for (let i = 1; i < rows.length; i++) {
        //Get Species Name
        td1 = rows[i].getElementsByTagName("td")[3];
        DataValue1 = td1.innerText.toLowerCase();
        //Get Ability Name
        td2 = rows[i].getElementsByTagName("td")[5];
        DataValue2 = td2.innerText.toLowerCase();
        //Get Location Data
        td3 = rows[i].getElementsByTagName("td")[13];
        DataValue3 = td3.innerText.toLowerCase();
        //Check if searched value is available in table data
        //Then display matched data
        if (DataValue1.indexOf(SearchValue) > -1
        || DataValue2.indexOf(SearchValue) > -1
        || DataValue3.indexOf(SearchValue) > -1) {
            rows[i].style.display = "";
        } else {
            //No data matched, clear all table
            rows[i].style.display = "none";
        }
    }
}

//Function to check user's device
function mediaSize(Id) {
    //Check device size
    const PortraitMobile = window.matchMedia("(max-width: 480px)");
    const Desktop = window.matchMedia("(min-width: 481px)");
    var row = document.getElementById(Id);
    //Check which design is used
    if (PortraitMobile.matches) {
        //Portrait Mobile device, shorter table data
        var td = row.getElementsByTagName("td");
        for (let j = 6; j < td.length; j++) {
            td[j].style.display = "none";
        }
    } else if (Desktop.matches) {
        //Desktop or Landscape mobile, larger table
        var td = row.getElementsByTagName("td");
        for (let j = 12; j < td.length; j++) {
            td[j].style.display = "none";
        }
    }
}

//Function to check orientation change
window.onorientationchange = function() {
    window.location.reload();
};

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function TransparentChoiceTab() {
    const ChoiceTab = document.getElementsByClassName("ChoiceBtn");
    const ActiveTable = document.getElementsByTagName('tbody');
    for (let x = 0; x < ChoiceTab.length; x++) {
        ChoiceTab[x].style.backgroundColor = "transparent";
    }
    for (let x = 0; x < ActiveTable.length; x++) {
        var table = ActiveTable[x].classList
        table.remove('active')
    }
    document.getElementById("Ability").style.display = "none";
    document.getElementById("Species").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Trainer").style.display = "none";
    document.getElementById("Moves").style.display = "none";
    document.getElementById("Items").style.display = "none";
}

const AbilityTabBtn = document.getElementsByClassName('ChoiceBtn')[0];
const SpeciesTabBtn = document.getElementsByClassName('ChoiceBtn')[1];
const LocationTabBtn = document.getElementsByClassName('ChoiceBtn')[2];
const TrainerTabBtn = document.getElementsByClassName('ChoiceBtn')[3];
const MovesTabBtn = document.getElementsByClassName('ChoiceBtn')[4];
const ItemsTabBtn = document.getElementsByClassName('ChoiceBtn')[5];

AbilityTabBtn.addEventListener('click', AbilityFunction);
SpeciesTabBtn.addEventListener('click', SpeciesFunction);
LocationTabBtn.addEventListener('click', LocationFunction);
TrainerTabBtn.addEventListener('click', TrainerFunction);
MovesTabBtn.addEventListener('click', MovesFunction);
ItemsTabBtn.addEventListener('click', ItemsFunction);

var AbilityData = JSON.parse(localStorage.getItem("Ability"));
var SpeciesData = JSON.parse(localStorage.getItem("Species"));
var LocationData = JSON.parse(localStorage.getItem("Location"));
var TrainerData = JSON.parse(localStorage.getItem("Trainer"));
var MovesData = JSON.parse(localStorage.getItem("Move"));
var ItemsData = JSON.parse(localStorage.getItem("Items"));
var LearnsetData = JSON.parse(localStorage.getItem("Learnset"));
var SpriteData = JSON.parse(localStorage.getItem("Sprite"));

function AbilityFunction() {
    LazyLoad(Ability, true);
    TransparentChoiceTab();
    AbilityTabBtn.style.backgroundColor = 'red';
    var AbilityTab = document.getElementById("Ability")
    AbilityTab.style.display = "block";
    var AbilityBody = document.getElementById("AbilityTableBody")
    AbilityBody.classList.add('active')
}

function SpeciesFunction() {
    LazyLoad(Species, true);
    TransparentChoiceTab();
    SpeciesTabBtn.style.backgroundColor = 'red';
    var SpeciesTab = document.getElementById("Species")
    SpeciesTab.style.display = "block";
    var SpeciesBody = document.getElementById("SpeciesTableBody")
    SpeciesBody.classList.add('active')
}

function LocationFunction() {
    LazyLoad(Location, true);
    TransparentChoiceTab();
    LocationTabBtn.style.backgroundColor = 'red';
    var LocationTab = document.getElementById("Location")
    LocationTab.style.display = "block";
    var LocationBody = document.getElementById("LocationTableBody")
    LocationBody.classList.add('active')
}

function TrainerFunction() {
    LazyLoad(Trainer, true);
    TransparentChoiceTab();
    TrainerTabBtn.style.backgroundColor = 'red';
    var TrainerTab = document.getElementById("Trainer")
    TrainerTab.style.display = "block";
    var TrainerBody = document.getElementById("TrainerTableBody")
    TrainerBody.classList.add('active')
}

function MovesFunction() {
    LazyLoad(Moves, true);
    TransparentChoiceTab();
    MovesTabBtn.style.backgroundColor = 'red';
    var MovesTab = document.getElementById("Moves")
    MovesTab.style.display = "block";
    var MovesBody = document.getElementById("MoveTableBody")
    MovesBody.classList.add('active')
}

function ItemsFunction() {
    LazyLoad(Items, true);
    TransparentChoiceTab();
    ItemsTabBtn.style.backgroundColor = 'red';
    var ItemsTab = document.getElementById("Items")
    ItemsTab.style.display = "block";
    var ItemsBody = document.getElementById("ItemsTableBody")
    ItemsBody.classList.add('active')
}

var targetSpecies = document.querySelectorAll('.active')[0];

let config = {
    childList: true,
    attributes: true,
}

let callback = (mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
            observer.disconnect();
            let target = document.querySelectorAll('.active')[0];
            observer.observe(target, config);
        }
    }
    var TesObs = document.getElementsByClassName('SObs')[0];
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    }
    let TesObserver = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = document.getElementsByClassName('active')[0].id;
                //console.log(targetId)
                if (targetId[0] == 'A') {
                    LazyLoad(Ability, false);
                } else if(targetId[0] == 'S') {
                    LazyLoad(Species, false);
                } else if (targetId[0] == 'L') {
                    LazyLoad(Location, false);
                } else if (targetId[0] == 'T') {
                    LazyLoad(Trainer, false);
                } else if (targetId[0] == 'M') {
                    LazyLoad(Moves, false);
                } else if (targetId[0] == 'I') {
                    LazyLoad(Items, false);
                }
            }
        })
    }, options);
    TesObserver.observe(TesObs)
}

const observer = new MutationObserver(callback);
observer.observe(targetSpecies, config);

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}