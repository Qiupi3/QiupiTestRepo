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
//.then(resp => resp.json())
.then(resp => window.localStorage.setItem("Sprite", resp))
.then(() => {SpeciesFunction();});
}

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