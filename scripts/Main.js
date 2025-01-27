const AbilityData = JSON.parse(localStorage.getItem("Ability"));
const SpeciesData = JSON.parse(localStorage.getItem("Species"));
const LocationData = JSON.parse(localStorage.getItem("Location"));
const TrainerData = JSON.parse(localStorage.getItem("Trainer"));
const MoveData = JSON.parse(localStorage.getItem("Move"));
const ItemData = JSON.parse(localStorage.getItem("Item"));
const LearnsetData = JSON.parse(localStorage.getItem("Learnset"));

const gen = function* (data) {
    let index = 0;
    while (index < data.length) {
        let reset = yield data[index++];
        if (reset == true || index == data.length) {
            index = 0;
        }
    }
}

const gAbility = gen(AbilityData);
const gLocation = gen(LocationData);
const gTrainer = gen(TrainerData);
const gSpecies = gen(SpeciesData);
const gMove = gen(MoveData);
const gItem = gen(ItemData);
const gLearnset = gen(LearnsetData);

const table = document.querySelector(`.active`);

const updateHistoryURL = function (tab) {
    history.pushState(null, '', window.location.origin + `/?tab=${tab}`);
}

window.onload = () => {
    JSON.parse(localStorage.getItem("Ability")) ? loadingScreen.className = 'hide' : null;
    main.classList.remove('hide');
    // renderTableHeader(currentTab);
    lazyLoad(currentTab);
}

const lazyLoad = (tab, clearTable=false) => {
    if (clearTable) {
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
        const tableClass = table.classList;
        tableClass.replace(tableClass[0], tab);
    }

    const data = eval(`g${tab}`);
    const callFunction = eval(`render${tab}Table`);
    const SObs = document.querySelector('.SObs');
    const activeData = eval(`${tab}Data`).length;

    let max = 40;
    while (max && table.children.length != activeData) {
        callFunction(data.next(clearTable && max == 40).value);
        max--;
    }
    SObs ? SObs.classList = '' : null;
    table.lastChild.classList = `SObs ${tab}`;
}

function renderAbilityTable(Ability) {
    const row = document.createElement("tr");
    // if (Ability.Replacement != "0") {
    //     Row.className += "RestrictedAbility";
    // }
    row.innerHTML += 
    `
    <td>${Ability.Name}</td>
    <td>${Ability.Description}</td>
    `
    row.setAttribute("id", Ability.UID);
    table.appendChild(row);
}

function renderSpeciesTable(Species) {
    const row = document.createElement("tr");
    row.innerHTML += 
    `
    <td>${Species.UID}</td>
    <td><img src="Assets/Transparent/${Species.SUID}.png"></td>
    <td>${Species.Name}</td>
    <td>${TypeBox(Species.Type).innerHTML}</td>
    <td>${AbilityBox(Species.Ability, false).innerHTML}</td>
    <td>${Species.BST}</td>
    <td>${Species.HP}</td>
    <td>${Species.Atk}</td>
    <td>${Species.Def}</td>
    <td>${Species.SpA}</td>
    <td>${Species.SpD}</td>
    <td>${Species.Spe}</td>
    `
    
    row.setAttribute("id", Species.UID);
    row.setAttribute("onclick", `OpenDetails(${Species.UID})`);
    table.appendChild(row);
}

function renderLocationTable(Loc) {
    const LocationTable = document.getElementById("LocationTableBody");
    const LocationRow = document.createElement("tr");
    const LocationCell = document.createElement("td");
    const Table = document.createElement("table");
    const TableHeader = document.createElement("thead");
    const TableHeaderRow = document.createElement("tr");
    const LocationNameCell = document.createElement("td");
    const LocationResCell = document.createElement("td");
    
    LocationNameCell.innerText = Loc.Loc;
    LocationNameCell.setAttribute('colspan', '2')
    LocationResCell.innerText = Loc.Res;
    LocationResCell.setAttribute('colspan', '2')
    
    TableHeaderRow.appendChild(LocationNameCell);
    TableHeaderRow.appendChild(LocationResCell);
    TableHeader.appendChild(TableHeaderRow);
    
    Table.appendChild(TableHeader);
    
    const LocationSpeciesArr = splitFunc(Loc.SUID);
    const LocationNameArr = splitFunc(Loc.Name);
    const LocationLvArr = splitFunc(Loc.Lv);
    const LocationERArr = splitFunc(Loc.ER);
    for (let x = 0; x < LocationSpeciesArr.length; x++) {
        let row = document.createElement("tr");
        let SUIDCell = document.createElement("td");
        let NameCell = document.createElement("td");
        let LvCell = document.createElement("td");
        let ERCell = document.createElement("td");
        let Sprite = `<img src="Assets/Transparent/${LocationSpeciesArr[x]}.png">`;
        SUIDCell.innerHTML += Sprite;
        NameCell.innerText = LocationSpeciesArr[x];
        LvCell.innerText = LocationLvArr[x];
        ERCell.innerText = LocationERArr[x];
        
        row.appendChild(SUIDCell);
        row.appendChild(NameCell);
        row.appendChild(LvCell);
        row.appendChild(ERCell);
        row.setAttribute("onclick", "OpenDetails(" + LocationSpeciesArr[x] + ")");
        Table.appendChild(row);
    }
    LocationCell.setAttribute("colspan", "4");
    LocationCell.appendChild(Table)
    LocationRow.appendChild(LocationCell);
    LocationRow.setAttribute("id", Loc.UID)
    LocationRow.setAttribute("class", 'LocationRow')
    LocationTable.appendChild(LocationRow);
}

function renderMoveTable(Move) {
    let MoveRow = CreateMoveRow(false, Move);
    table.appendChild(MoveRow);
}

function BackTop() {
    var currentPos = scrollY;
    window.requestAnimationFrame(function step() {
        currentPos -= 500;
        if (currentPos >= 0) {
            scrollTo(0, currentPos);
            requestAnimationFrame(step);
        } else {
            currentPos = 0;
            scrollTo(0, 0);
            cancelAnimationFrame(step);
        }
    });
}

function AbilityBox(Ability, Desc) {
    const AbilityData = JSON.parse(localStorage.getItem("Ability"));
    let SpeciesAbility = splitFunc(Ability)
    let AbilityCell = document.createElement("div");
    for (let x = 0; x < SpeciesAbility.length; x++) {
        let AbilityBox = document.createElement("div");
        AbilityBox.innerText = AbilityData[SpeciesAbility[x] - 40001].Name;
        if (Desc) {
            AbilityBox.innerText = "• " + AbilityData[SpeciesAbility[x] - 40001].Name;
        }
        AbilityBox.setAttribute('class', 'AbilityBox')
        let HA = splitAbility(Ability)
        if (HA && x == SpeciesAbility.length-1) {
            AbilityBox.setAttribute('class', 'HABox')
        }
        AbilityCell.appendChild(AbilityBox);
        if (Desc) {
            let AbilityDesc = AbilityData[SpeciesAbility[x] - 40001].Description;
            let DescBox = document.createElement("div");
            DescBox.innerText = AbilityDesc;
            AbilityCell.appendChild(DescBox)
        }
    }
    return AbilityCell;
}

function TypeBox(Type) {
    Type = splitFunc(Type);
    let TypeCell = document.createElement("div");
    for (let x = 0; x < Type.length; x++) {
        let TypeBox = document.createElement("div");
        TypeBox.innerText = Type[x];
        TypeBox.setAttribute('class', `${Type[x]}Box TypeBox`);
        TypeCell.appendChild(TypeBox);
    }
    return TypeCell;
}

