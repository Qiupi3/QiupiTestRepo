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

//Function to search Value from Search Bar
function Search() {
    let SearchBar = document.getElementById("SearchBar");
    let SearchValue = SearchBar.value.toLowerCase();
    if (SearchValue.length > 2) {
        observer.disconnect();
        SearchedData = SpeciesData.filter(item => item.Name.toLowerCase().indexOf(SearchValue) > -1);
        LazyLoad(Search, true)
    } else {
        observer.observe(targetSpecies, config);
        LazyLoad(Species, true);
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

/* Set the width of the side navigation to 200px */
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
        threshold: 0.1,
    }
    let TesObserver = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = document.getElementsByClassName('active')[0].id;
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