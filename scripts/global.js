const requestData = async (name) => {
    loadingScreen.innerHTML += `Fetching ${name} data...\n`
    const resp = await fetch(`data/${name}.json`);
    const content = await resp.json();
    window.localStorage.setItem(name, JSON.stringify(content));
    if (name === "Learnset") {
        window.location = window.location;
    }
}

if (!window.location.href.includes('?tab=')) {
    history.pushState(null, '', window.location.origin + '/?tab=Species');
}

const url = window.location.href;
const activeTable = document.getElementById('table').classList;
const activeChoice = document.querySelector('.activeChoice');
const currentTab = url.split(/\?tab=/)[1].split('&')[0];

(() => {
    if (activeTable != currentTab) {
        activeTable.replace(activeTable[0], currentTab);
    }
    if (activeChoice.id != currentTab) {
        activeChoice.classList.remove('activeChoice');
        document.querySelector(`#${currentTab}`).classList.add('activeChoice');
    }
})();

JSON.parse(localStorage.getItem("Ability")) ?? requestData('Ability');
JSON.parse(localStorage.getItem("Species")) ?? requestData('Species');
JSON.parse(localStorage.getItem("Location")) ?? requestData('Location');
JSON.parse(localStorage.getItem("Trainer"));
JSON.parse(localStorage.getItem("Move")) ?? requestData('Move');
JSON.parse(localStorage.getItem("Item")) ?? requestData('Item');
JSON.parse(localStorage.getItem("Learnset")) ?? requestData('Learnset');