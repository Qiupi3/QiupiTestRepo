//The Main(Parent) Script

//Fetching all Species Data when page is loaded then render them into Table by Function

window.onload = function() {
    localStorage.clear();
    var Status = localStorage.getItem("Status");
    if (Status) {
        var timerStart = Date.now();
        SpeciesFunction();
        console.log("Time until Table Rendered: ", Date.now()-timerStart);
    } else {
        window.localStorage.setItem("Status", "OK")
        ReqAbilityData();
        ReqSpeciesData();
        ReqLocationData();
        //ReqTrainerData();
        //ReqMoveData();
        //ReqItemsData();
        //ReqLearnsetData();
    }
}

async function ReqAbilityData() {
    const resp = await fetch("data/Ability.json");
    const content = await resp.json();
    window.localStorage.setItem("Ability", JSON.stringify(content));
    /*const ReqData = new XMLHttpRequest();
    ReqData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var AbilityData = this.responseText;
            window.localStorage.setItem("Ability", AbilityData);
        }
    };
    ReqData.open("POST", "data/Ability.json", true);
    ReqData.send();
    */
}

async function ReqSpeciesData() {
    const resp = await fetch("data/Species.json");
    const content = await resp.json();
    window.localStorage.setItem("Species", JSON.stringify(content));
    SpeciesFunction();
    /*const ReqData = new XMLHttpRequest();
    ReqData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var SpeciesData = this.responseText;
            window.localStorage.setItem("Species", SpeciesData);
            SpeciesFunction();
        }
    };
    ReqData.open("POST", "data/Species.json", true);
    ReqData.send();
    */
}

async function ReqLocationData() {
    /*const ReqData = new XMLHttpRequest();
    ReqData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var LocationData = this.responseText;
            window.localStorage.setItem("Location", LocationData);
        }
    };
    ReqData.open("POST", "data/Location.json", true);
    ReqData.send();
    */
}

/*function ReqMoveData() {
    const ReqData = new XMLHttpRequest();
    ReqData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var MoveData = this.responseText;
            window.localStorage.setItem("Move", MoveData);
        }
    };
    ReqData.open("POST", "data/Move.json", true);
    ReqData.send();
}

function ReqItemsData() {
    const ReqData = new XMLHttpRequest();
    ReqData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ItemData = this.responseText;
            window.localStorage.setItem("Item", ItemData);
        }
    };
    ReqData.open("POST", "data/Items.json", true);
    ReqData.send();
}

function ReqLearnsetData() {
    const ReqData = new XMLHttpRequest();
    ReqData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var LearnsetData = this.responseText;
            window.localStorage.setItem("Learnset", LearnsetData);
        }
    };
    ReqData.open("POST", "data/Learnset.json", true);
    ReqData.send();
}*/
function RenderAbilityTable(Ability) {
    const AbilityTable = document.getElementById("AbilityTableBody");
    const Row = document.createElement("tr");
    const NameBox = document.createElement("td");
    const DescBox = document.createElement("td");
        
    NameBox.innerText = Ability.Name;
    DescBox.innerText = Ability.Description;
    Row.appendChild(NameBox);
    Row.appendChild(DescBox);
        
    Row.setAttribute("id", Ability.UID);
    if (Ability.Replacement != "0") {
        NameBox.style.color = "red";
        DescBox.style.color = "red";
    }
    AbilityTable.appendChild(Row);
}

function RenderSpeciesTable(Species) {
    const SpeciesTable = document.getElementById("SpeciesTableBody");
    const Row = document.createElement("tr");
    
    const IDCell = document.createElement("td");
    const SpriteCell = document.createElement("td");
    const NameCell = document.createElement("td");
    const TypeCell = document.createElement("td");
    const AbilityCell = document.createElement("td");
    const BSTCell = document.createElement("td");
    const HPCell = document.createElement("td");
    const AtkCell = document.createElement("td");
    const DefCell = document.createElement("td");
    const SpACell = document.createElement("td");
    const SpDCell = document.createElement("td");
    const SpeCell = document.createElement("td");
    
    IDCell.innerText = Species.SID;
    SpriteCell.innerHTML = "<img src='sprite/spr/" + Species.SUID + ".png'>";
    NameCell.innerText = Species.Name;
    TypeCell.innerHTML = TypeBox(Species.Type).innerHTML
    AbilityCell.innerHTML = AbilityBox(Species.Ability, false).innerHTML
    BSTCell.innerText = Species.BST;
    HPCell.innerText = Species.HP;
    AtkCell.innerText = Species.Atk;
    DefCell.innerText = Species.Def;
    SpACell.innerText = Species.SpA;
    SpDCell.innerText = Species.SpD;
    SpeCell.innerText = Species.Spe;
    
    Row.appendChild(IDCell);
    Row.appendChild(SpriteCell);
    Row.appendChild(NameCell);
    Row.appendChild(TypeCell);
    Row.appendChild(AbilityCell);
    Row.appendChild(BSTCell);
    Row.appendChild(HPCell);
    Row.appendChild(AtkCell);
    Row.appendChild(DefCell);
    Row.appendChild(SpACell);
    Row.appendChild(SpDCell);
    Row.appendChild(SpeCell);
    
    Row.setAttribute("id", Species.UID);
    Row.setAttribute("onclick", "OpenDetails(" + Species.UID + ")");
    SpeciesTable.appendChild(Row);
    
    mediaSize(Species.UID);
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
        SUIDCell.innerHTML = '<img src="sprite/spr/' + LocationSpeciesArr[x] + '.png">';
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

function LazyLoad(Tab, reset) {
    //var timerStart = Date.now();
    //console.time("Loader")
    
    let Data, TabId;
    switch (Tab) {
        case Ability:
        Data = AbilityData;
        TabId = "Ability"
        break;
        case Species:
        Data = SpeciesData;
        TabId = "Species"
        break;
        case Location:
        Data = LocationData;
        TabId = "Location"
        break;
        case Trainer:
        Data = TrainerData;
        TabId = "Trainer"
        break;
        case Moves:
        Data = MovesData
        TabId = "Move"
        break;
        case Items:
        Data = ItemsData
        TabId = "Items"
        break;
    }
    
    let table = document.querySelectorAll('.active');
    if (reset) {
        while (table[0].rows[0]) {
            table[0].removeChild(table[0].rows[0])
        }
        Data = Data.sort((a, b) => {
            return a.UID - b.UID;
        });
    }
    
    let Max = 20;
    let renderer = "Render" + TabId + "Table";
    while (Max) {
        Max--;
        let tlen = document.getElementById(TabId + "TableBody").rows.length
        if (tlen > Data.length-1) {
            break;
        }
        let TData = Data.shift();
        Data.push(TData);
        if (TData) {
            let y = document.getElementsByClassName('SObs');
            if (y.length > 0) {
                y = y[0].classList;
                y.remove('SObs');
            }
            eval(renderer)(TData)
            let x = document.getElementById(TData.UID);
            x.classList.add('SObs');
        }
        
        
    }
    //console.log("Time until Table Rendered: ", Date.now()-timerStart);
    //console.timeEnd("Loader")
}

window.onscroll = function(){
    var Dex = document.querySelector("#border");
    var Detail = document.getElementById("SpeciesDetail").style.display;
    if (Detail == "block") {
        if(Dex.getBoundingClientRect().bottom <= 0) {
            CloseDetails(false);
        }
    }
    var BackTop = document.getElementById("BackTop");
    if (Dex.getBoundingClientRect().top < -20000) {
        BackTop.style.display = "block";
    } else {
        BackTop.style.display = "none";
    }
}

function BackTop() {
    location.href = "#Main"
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
        TypeBox.setAttribute('class', Type[x] + 'Box TypeBox');
        TypeCell.appendChild(TypeBox);
    }
    return TypeCell;
}