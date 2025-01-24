const AbilityData = JSON.parse(localStorage.getItem("Ability"));
const SpeciesData = JSON.parse(localStorage.getItem("Species"));
const LocationData = JSON.parse(localStorage.getItem("Location"));
const TrainerData = JSON.parse(localStorage.getItem("Trainer"));
const MovesData = JSON.parse(localStorage.getItem("Move"));
const ItemsData = JSON.parse(localStorage.getItem("Items"));
const LearnsetData = JSON.parse(localStorage.getItem("Learnset"));

const gen = function* (data) {
    let index = 0;
    while (index < data.length) {
        let reset = yield data[index++];
        if (reset || index == data.length) {
            index = 0;
        }
    }
}

const gAbility = gen(AbilityData);
const gLocation = gen(LocationData);
const gTrainer = gen(TrainerData);
const gSpecies = gen(SpeciesData);
const gMoves = gen(MovesData);
const gItems = gen(ItemsData);
const gLearnset = gen(LearnsetData);

const updateHistoryURL = function (param) {
    
}

window.onload = () => {
    lazyLoad(currentTab);
}

const lazyLoad = (tab, clearTable=false) => {
    const table = document.querySelector(`.${tab}`);
    const data = eval(`g${tab}`);
    //renderTableHeader(tab);
    const SObs = document.querySelector('.SObs');
    SObs ? SObs.classList.remove('SObs') : null;
    let max = 40;
    if (clearTable) {
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
    }
    while (max) {
        RenderSpeciesTable(table, data.next().value);
        max--;
    }
    table.lastChild.classList = 'SObs';
}

function RenderAbilityTable(Ability) {
    const AbilityTable = document.getElementById("AbilityTableBody");
    const Row = document.createElement("tr");
    Row.setAttribute("id", Ability.UID);
    // if (Ability.Replacement != "0") {
    //     Row.className += "RestrictedAbility";
    // }
    Row.innerHTML += `<td>${Ability.Name}</td><td>${Ability.Description}</td>`
    AbilityTable.appendChild(Row);
}

function RenderSpeciesTable(table, Species) {
    //const SpeciesTable = document.getElementById("SpeciesTableBody");
    const Row = document.createElement("tr");
    Row.innerHTML += 
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
    
    Row.setAttribute("id", Species.UID);
    Row.setAttribute("onclick", `OpenDetails(${Species.UID})`);
    table.appendChild(Row);
    //SpeciesTable.appendChild(Row);
    //mediaSize(Species.UID);
}

function RenderLocationTable(Loc) {
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

function RenderMoveTable(Move) {
    const MoveTable = document.getElementById("MoveTableBody");
    let MoveRow = CreateMoveRow(false, Move);
    
    MoveTable.appendChild(MoveRow)
}

// function LazyLoad(Tab, reset) {
//     let Data, TabId;
//     switch (Tab) {
//         case Ability:
//         Data = AbilityData;
//         TabId = "Ability"
//         break;
//         case Species:
//         Data = SpeciesData;
//         TabId = "Species"
//         break;
//         case Location:
//         Data = LocationData;
//         TabId = "Location"
//         break;
//         case Trainer:
//         Data = TrainerData;
//         TabId = "Trainer"
//         break;
//         case Moves:
//         Data = MovesData
//         TabId = "Move"
//         break;
//         case Items:
//         Data = ItemsData
//         TabId = "Items"
//         break;
//         case Search:
//         Data = SearchedData
//         TabId = "Species"
//         break;
//     }
    
//     let table = document.querySelectorAll('.active');
//     if (reset) {
//         while (table[0].rows[0]) {
//             table[0].removeChild(table[0].rows[0])
//         }
//         Data = Data.sort((a, b) => {
//             return a.UID - b.UID;
//         });
//     }
    
//     let Max = 40;
//     let renderer = "Render" + TabId + "Table";
//     while (Max) {
//         Max--;
//         let tlen = document.getElementById(TabId + "TableBody").rows.length
//         if (tlen > Data.length-1) {
//             break;
//         }
//         let TData = Data.shift();
//         Data.push(TData);
//         if (TData) {
//             let y = document.getElementsByClassName('SObs');
//             if (y.length > 0) {
//                 y = y[0].classList;
//                 y.remove('SObs');
//             }
//             eval(renderer)(TData)
//             if (Tab != Search) {
//                 let x = document.getElementById(TData.UID);
//                 x.classList.add('SObs');
//             }
//         }
        
        
//     }
// }

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

