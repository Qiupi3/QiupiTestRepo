var AbilityData = JSON.parse(localStorage.getItem("Ability"));
var SpeciesData = JSON.parse(localStorage.getItem("Species"));
var LocationData = JSON.parse(localStorage.getItem("Location"));
var TrainerData = JSON.parse(localStorage.getItem("Trainer"));
var MovesData = JSON.parse(localStorage.getItem("Move"));
var ItemsData = JSON.parse(localStorage.getItem("Items"));
var LearnsetData = JSON.parse(localStorage.getItem("Learnset"));

async function ReqAbilityData() {
    const resp = await fetch("data/Ability.json");
    const content = await resp.json();
    window.localStorage.setItem("Ability", JSON.stringify(content));
}

async function ReqSpeciesData() {
    const resp = await fetch("data/Species.json");
    const content = await resp.json();
    window.localStorage.setItem("Species", JSON.stringify(content));
    window.location = window.location;
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


if (!(AbilityData && SpeciesData && LocationData && ItemsData && LearnsetData && MovesData)) {
    ReqSpeciesData();
    ReqAbilityData();
    ReqLocationData();
    //ReqTrainerData();
    ReqMoveData();
    ReqItemsData();
    ReqLearnsetData();
}

