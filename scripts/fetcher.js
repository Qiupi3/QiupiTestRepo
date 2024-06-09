async function ReqSpriteData() {
    const resp = await fetch("data/Sprite.json");
    const content = await resp.json();
    window.localStorage.setItem("Sprite", JSON.stringify(content));
    window.location = window.location;
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

if (!(AbilityData && SpeciesData && LocationData && MovesData && ItemsData
    && LearnsetData && SpriteData)) {
    ReqSpriteData();
    ReqAbilityData();
    ReqSpeciesData();
    ReqLocationData();
    //ReqTrainerData();
    ReqMoveData();
    ReqItemsData();
    ReqLearnsetData();
}