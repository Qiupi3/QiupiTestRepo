var AbilityData = JSON.parse(localStorage.getItem("Ability"));
var SpeciesData = JSON.parse(localStorage.getItem("Species"));
var LocationData = JSON.parse(localStorage.getItem("Location"));
var TrainerData = JSON.parse(localStorage.getItem("Trainer"));
var MovesData = JSON.parse(localStorage.getItem("Move"));
var ItemsData = JSON.parse(localStorage.getItem("Items"));
var LearnsetData = JSON.parse(localStorage.getItem("Learnset"));
var SpriteData = JSON.parse(localStorage.getItem("Sprite"));

async function ReqSpriteData() {
    fetch("data/Sprite.json")
.then(resp => window.localStorage.setItem("Sprite", resp.json()))
.then(() => {SpeciesFunction();});
}

async function ReqAbilityData() {
    fetch("data/Ability.json")
.then(resp => window.localStorage.setItem("Ability", resp.json()));
}

async function ReqSpeciesData() {
    fetch("data/Species.json")
.then(resp => window.localStorage.setItem("Species", resp.json()));
}

async function ReqLocationData() {
    fetch("data/Location.json")
.then(resp => window.localStorage.setItem("Location", resp.json()));
}

async function ReqMoveData() {
    fetch("data/Move.json")
.then(resp => window.localStorage.setItem("Move", resp.json()));    
}

async function ReqItemsData() {
    fetch("data/Items.json")
.then(resp =>
window.localStorage.setItem("Items", resp.json()));    
}

async function ReqLearnsetData() {
    fetch("data/Learnset.json")
.then(resp => window.localStorage.setItem("Learnset", resp.json()));    
}

if (!(AbilityData && SpeciesData && LocationData && ItemsData && LearnsetData && MovesData && SpriteData)) {
    ReqSpriteData();
    ReqSpeciesData();
    ReqAbilityData();
    ReqLocationData();
    //ReqTrainerData();
    ReqMoveData();
    ReqItemsData();
    ReqLearnsetData();
}

/*async function ReqData() {
    const resp = await fetch("data/data.json");
    const content = await resp.json();
    console.log(content)
    window.localStorage.setItem("Ability", JSON.stringify(content[0]));
    window.localStorage.setItem("Species", JSON.stringify(content[1]));
    window.localStorage.setItem("Location", JSON.stringify(content[2]));
    window.localStorage.setItem("Move", JSON.stringify(content[3]));
    window.localStorage.setItem("Items", JSON.stringify(content[4]));
    window.localStorage.setItem("Learnset", JSON.stringify(content[5]));
    window.localStorage.setItem("Sprite", JSON.stringify(content[6]));
}

if (!(AbilityData && SpeciesData && LocationData && ItemsData && LearnsetData && MovesData && SpriteData)) {
    ReqData();
}*/