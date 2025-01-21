const AbilityData = JSON.parse(localStorage.getItem("Ability"));
const SpeciesData = JSON.parse(localStorage.getItem("Species"));
const LocationData = JSON.parse(localStorage.getItem("Location"));
const TrainerData = JSON.parse(localStorage.getItem("Trainer"));
const MovesData = JSON.parse(localStorage.getItem("Move"));
const ItemsData = JSON.parse(localStorage.getItem("Items"));
const LearnsetData = JSON.parse(localStorage.getItem("Learnset"));

async function ReqAbilityData() {
    const resp = await fetch("data/Ability.json");
    const content = await resp.json();
    window.localStorage.setItem("Ability", JSON.stringify(content));
}

async function ReqSpeciesData() {
    const resp = await fetch("data/Species.json");
    const content = await resp.json();
    window.localStorage.setItem("Species", JSON.stringify(content));
}

async function ReqLocationData() {
    const resp = await fetch("data/Location.json");
    const content = await resp.json();
    window.localStorage.setItem("Location", JSON.stringify(content));
}

async function ReqMoveData() {
    const resp = await fetch("data/Move.json");
    const content = await resp.json();
    window.localStorage.setItem("Move", JSON.stringify(content));    
}

async function ReqItemsData() {
    const resp = await fetch("data/Items.json");
    const content = await resp.json();
    window.localStorage.setItem("Items", JSON.stringify(content));    
}

async function ReqLearnsetData() {
    const resp = await fetch("data/Learnset.json");
    const content = await resp.json();
    window.localStorage.setItem("Learnset", JSON.stringify(content));    
}

const url = window.location.href;
const activeTable = document.getElementById('table').classList;
const currentTab = url.split(/\?tab=/)[1].split('&')[0];

if (!url.includes('?')) {
    history.pushState(null, '', window.location + '?tab=Species')
}

(() => {
    if (activeTable != currentTab) {
        activeTable.replace(activeTable[0], currentTab);
    }
})();

switch (currentTab) {
    case 'Species':
        !AbilityData ? ReqAbilityData() : AbilityData;
        !SpeciesData ? ReqSpeciesData() : SpeciesData;
        break;
    case 'Ability':
        !AbilityData ? ReqAbilityData() : AbilityData;
        break;
    case 'Location':
        !LocationData ? ReqLocationData() : LocationData;
        break;
    //case 'Trainer':
    //    !TrainerData ? ReqTrainerData() : TrainerData;
    //    break;
    case 'Moves':
        !MovesData ? ReqMoveData() : MovesData;
        break;
    case 'Items':
        !ItemsData ? ReqItemsData() : ItemsData;
        break;
}