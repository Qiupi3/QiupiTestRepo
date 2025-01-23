const requestData = async (name) => {
    loadingScreen.innerHTML += `Fetching ${name} data...\n`
    const resp = await fetch(`data/${name}.json`);
    const content = await resp.json();
    window.localStorage.setItem(name, JSON.stringify(content));
}

if (!window.location.href.includes('?tab=')) {
    history.pushState(null, '', window.location.origin + '/QiupiTestRepo/?tab=Species');
}

const url = window.location.href;
const activeTable = document.getElementById('table').classList;
const currentTab = url.split(/\?tab=/)[1].split('&')[0];

(() => {
    if (activeTable != currentTab) {
        activeTable.replace(activeTable[0], currentTab);
    }
})();

const start = () => {
    JSON.parse(localStorage.getItem("Ability")) ?? requestData('Ability');
    JSON.parse(localStorage.getItem("Species")) ?? requestData('Species');
    JSON.parse(localStorage.getItem("Location")) ?? requestData('Location');
    JSON.parse(localStorage.getItem("Trainer"));
    JSON.parse(localStorage.getItem("Move")) ?? requestData('Move');
    JSON.parse(localStorage.getItem("Items")) ?? requestData('Items');
    JSON.parse(localStorage.getItem("Learnset")) ?? requestData('Learnset');
    JSON.parse(localStorage.getItem("Ability")) ? loadingScreen.className = 'hide' : window.location;
    // main.classList.remove('hide');
}

start();