//Species Detail Function

const N1 = "Adamant, Brave, Docile, Hardy, Hasty, Impish, Jolly, Lax, Naive, Naughty, Rash, Quirky, or Sassy nature.)";
const N2 = "Bashful, Bold, Calm, Careful, Gentle, Lonely, Mild, Modest, Quiet, Relaxed, Serious, or Timid nature.)";

function OpenDetails(SpeciesID) {
    //var timerStart = Date.now();
    let tab = document.getElementById("speciesDetail");
    tab.className = '';

    // const SpeciesData = JSON.parse(localStorage.getItem("Species"));
    const species = SpeciesData[SpeciesID-1];
    
    const container = 
    `
    <div class="headContainer">
        <div id="closeDetail" class="headButton" onclick="CloseDetails(true)">
            &times
        </div>
        <h1>
            RR Dex - Details
        </h1>
        <div id="prevDetail" class="headButton" onclick="PrevDetails()">
            «
        </div>
        <div id="nextDetail" class="headButton" onclick="NextDetails()">
            »
        </div>
    </div>
    <div class="generalContainer" id="${species.UID}">
        <div>#${species.SID} ${species.Name}</div>
        <div><img src="Assets/Transparent/${species.SUID}.png"></div>
        <div>Type :${TypeBox(species.Type).innerHTML}</div>
        <div>Ability :${AbilityBox(species.Ability, true).innerHTML}</div>
    </div>
    `
    tab.innerHTML = container;
    // const UID = document.getElementById("UIDDetail");
    // const Num = document.getElementById("NumDetail");
    // const Sprite = document.getElementById("SpriteDetail");
    // const Type = document.getElementById("TypeDetail");
    // const Ability = document.getElementById("AbilityDetail");
    // const Location = document.getElementById("LocationDetail");
    // const HeldItem = document.getElementById("HeldItemDetail");
    // const EggGroup = document.getElementById("EggGroupDetail");
    // const Evolution = document.getElementById("EvoDetail");
    
    // let SpriteImage = `<img src="Assets/Transparent/${Species.SUID}.png">`

    // UID.innerText = Species.UID;
    // Num.innerText = `#${Species.SID} ${Species.Name}`;
    // Sprite.innerHTML = "";
    // Sprite.innerHTML += SpriteImage;
    // Type.innerHTML = "Type :" + TypeBox(Species.Type).innerHTML
    // Ability.innerHTML = "Ability :" + AbilityBox(Species.Ability, true).innerHTML;
    
    // const statsTable = document.getElementById("statsTable").rows;
    // for (let x = 0; x < statsTable.length; x++) {
    //     const StatsNumber = Object.values(Species)[6 + x];
    //     const cell = statsTable[x].getElementsByTagName("td");
    //     cell[0].innerText = StatsNumber;
    // }
    
    // for (let x = 0; x < statsTable.length; x++) {
    //     const cell = statsTable[x].getElementsByTagName("td");
    //     const box = cell[1].getElementsByTagName("div")[0];
    //     box.style.color = "transparent";
    //     if (x == 0) {
    //         box.style.width = (5 + cell[0].innerText/8) + "%";
    //         box.style.backgroundColor = "hsl(" + cell[0].innerText/7 + ", 85%, 45%)";
    //     } else {
    //         box.style.width = (5 + cell[0].innerText/2) + "%";
    //         box.style.backgroundColor = "hsl(" + cell[0].innerText/17*10 + ", 95%, 65%)";
    //     }
    // }
    
    // const SpeciesLocation = splitFunc(Species.Location);
    // Location.innerText = "Location : \n";
    // if (SpeciesLocation != "-") {
    //     for (let x = 0; x < SpeciesLocation.length; x++) {
    //         let LocIndex = SpeciesLocation[x] - 30001;
    //         let LocationObj = LocationData[LocIndex];
    //         Location.innerText += "• " + LocationObj.Loc + " " + LocationObj.Res + "\n";
    //         let LocSUIDArr = splitFunc(LocationObj.SUID);
    //         let LocERArr = splitFunc(LocationObj.ER);
    //         let LocLvArr = splitFunc(LocationObj.Lv);
    //         for (let x = 0; x < LocSUIDArr.length; x++) {
    //             if (LocSUIDArr[x] == Species.SUID) {
    //                 Location.innerText += "Lv : " + LocLvArr[x] + " " + LocERArr[x] + "\n";
    //             }
    //         }
    //     }
    // } else {
    //     Location.innerText += `• Unknown`;
    // }
    
    // const SpeciesHeld = splitFunc(Species.Held);
    // const SpeciesChance = splitFunc(Species.Chance);
    // HeldItem.innerText = "Held Item : \n";
    // if (SpeciesHeld != "-") {
    //     for (let x = 0; x < SpeciesHeld.length; x++) {
    //         let HeldIndex = SpeciesHeld[x] - 60001;
    //         let HeldObj = ItemsData[HeldIndex];
    //         HeldItem.innerText += "• " + HeldObj.Name
    //         + " " + SpeciesChance[x] + "\n";
    //     }
    // } else {
    //     HeldItem.innerText += `• None`;
    // }
    
    // const SpeciesEggGroup = splitFunc(Species.Egg);
    // EggGroup.innerText = "Egg Group : \n";
    // for (let x = 0; x < SpeciesEggGroup.length; x++) {
    //     EggGroup.innerText += "• " + SpeciesEggGroup[x] + "\n";
    // }
    
    // Evolution.innerHTML = "";
    // const EvoLine = splitFunc(Species.EvoLine);
    // const EvoText = document.createElement("div");
    // EvoText.innerText = "Evolution Chart : \n";
    // EvoText.setAttribute("class", "EvoTextBox")
    // Evolution.appendChild(EvoText)
    // if (EvoLine.length > 1) {
    //     for (let x = 0; x < EvoLine.length; x++) {
    //         if (EvoLine[x] == "0") {
    //             continue;
    //         }
    //         let EvoContainer = document.createElement("div");
    //         const ArrowBox = document.createElement("div");
    //         ArrowBox.innerText = "↓";
    //         ArrowBox.setAttribute("class", "ArrowBox")
            
    //         let ConditionBox = document.createElement("div");
    //         ConditionBox.setAttribute("class", "ConditionBox")
    //         let Condition = SpeciesData[EvoLine[x]-1].Condition
    //         let SpeciesCondition = splitFunc(Condition);
            
    //         if (SpeciesCondition.length == 1) {
    //             if (+SpeciesCondition[0]) {
    //                 ConditionBox.innerText = "(Level " + SpeciesCondition + ")";
    //             } else {
    //                 ConditionBox.innerText = "(Lv-Up with high Friendship)";
    //             }
    //         } else if (Ability.toString().includes(';')) {
    //             let x = Condition.split("; ");
    //             let y = splitFunc(x[1]);
    //             ConditionBox.innerText = "(Level " + x[0] + " or ";
    //             if (y.length == 1) {
    //                 ConditionBox.innerText += "Lv-Up with " + x[1] + ")";
    //             } else {
    //                 ConditionBox.innerText += "Lv-Up while knowing move " + y[1] + ")";
    //             }
    //         } else if (SpeciesCondition.length == 2) {
    //             if (SpeciesCondition[0] == "Mega") {
    //                 ConditionBox.innerText = "(Mega evolve with " + SpeciesCondition[1] + ")";
    //             } else if (SpeciesCondition[0] == "Item") {
    //                 ConditionBox.innerText = "(Use " + SpeciesCondition[1] + ")";
    //                 if (SpeciesCondition[1] == "Necrozium Z") {
    //                     ConditionBox.innerText = "(Beastification with Necrozium Z)"
    //                 }
    //             } else if (SpeciesCondition[0] == "Move") {
    //                 ConditionBox.innerText = "(Lv-Up while knowing move " + SpeciesCondition[1] + ")";
    //             } else if (SpeciesCondition[0] == "Friendship") {
    //                 if (SpeciesCondition[1] == "Fairy Type") {
    //                     ConditionBox.innerText = "(Lv-Up with high Friendship while knowing any " + SpeciesCondition[1] + " move)";
    //                 } else {
    //                     ConditionBox.innerText = "(Lv-Up with high Friendship during " + SpeciesCondition[1] + " time)";
    //                 }
    //             } else if (+SpeciesCondition[0]) {
    //                 if (SpeciesCondition[1] == "Day" || SpeciesCondition[1] == "Night"
    //                 || SpeciesCondition[1] == "Dusk") {
    //                     ConditionBox.innerText = "(Level " + SpeciesCondition[0] + " during " + SpeciesCondition[1] + " time)";
    //                 } else if (SpeciesCondition[1] == "Male" || SpeciesCondition[1] == "Female") {
    //                     ConditionBox.innerText = "(Level " + SpeciesCondition[0] + " " + SpeciesCondition[1] + " only)";
    //                 } else if (SpeciesCondition[1] == "N1") {
    //                     ConditionBox.innerText = "(Level " + SpeciesCondition[0] + "with " + N1;
    //                 } else if (SpeciesCondition[1] == "N2") {
    //                     ConditionBox.innerText = "(Level " + SpeciesCondition[0] + "with " + N2;
    //                 } else {
    //                     ConditionBox.innerText = "(Level " + SpeciesCondition[0] + " with " + SpeciesCondition[1] + ")";
    //                 }
    //             } else if (SpeciesCondition[0] == "Necrozmizer") {
    //                 ConditionBox.innerText = "(Use Necrozmizer on Necrozma and " + SpeciesCondition[1] + ")";
    //             }
    //         } else if (SpeciesCondition.length == 3) {
    //             ConditionBox.innerText = "(Use " + SpeciesCondition[2] + " " + SpeciesCondition[1] + " only)";
    //         }
            
    //         if (x != 0 && EvoLine[x - 1] != 0) {
    //             EvoContainer.appendChild(ArrowBox)
    //             EvoContainer.appendChild(ConditionBox);
    //         }
            
    //         let EvoBox = CreateEvoBox(EvoLine[x]);
    //         EvoContainer.appendChild(EvoBox)
            
    //         EvoContainer.setAttribute("class", "EvoContainer");
    //         if (EvoLine.length-1 > 3 && x > 2) {
    //             EvoContainer.setAttribute("class", "EvoContainerS" + (x-2));
    //             //Style split 3 evo
    //         } else if (x == 5) {
    //             EvoContainer.setAttribute("class", "EvoContainerS3");
    //             //Style split 2 evo with evo
    //         } else if (x > 2 && EvoLine.length > 5) {
    //             EvoContainer.setAttribute("class", "EvoContainer" + (x+2));
    //         }
            
    //         Evolution.appendChild(EvoContainer)
    //     }
    // } else {
    //     EvoText.innerText += Species.Name + " does not evolve.";
    // }
    
    // RenderLearnsetTable(Species.UID, Species.Name);
    scrollTo(0, 0);
    //console.log("Time until Detail Rendered: ", Date.now()-timerStart);
}

function CloseDetails(Ref) { 
    let tab = document.getElementById("speciesDetail");
    tab.className = 'hide';
    if (Ref) {
        const UID = document.getElementById("UIDDetail").innerText;
        //location.href = "#" + UID
    }
}

function PrevDetails() {
    var CurrentNum = document.getElementById("UIDDetail").innerText;
    var PrevNum = Number(CurrentNum) - 1;
    try { OpenDetails(PrevNum) }
    catch(err) {}
}

function NextDetails() {
    var CurrentNum = document.getElementById("UIDDetail").innerText;
    var NextNum = Number(CurrentNum) + 1;
    try { OpenDetails(NextNum) }
    catch(err) {}
}

function OpenMoveDetail(Id) {
    console.log(Id)
}

function CreateEvoBox(Id) {
    const SpeciesData = JSON.parse(localStorage.getItem("Species"));
    const Species = SpeciesData[Id-1];
    let Container = document.createElement("div");
    Container.innerHTML = 
    `
    <div class="wrapperBox" onclick="OpenDetails(${Id})">
        <div class="evolutionBox">
            <div class="evoSpriteBox">
                <img src="Assets/Transparent/${Species.SUID}.png">
            </div>
        </div>
        <div class="detailedBox">
            <div class="evoNameBox">${Species.Name}</div>
            <div class="evoTypeBox">${TypeBox(Species.Type).innerHTML}</div>
        </div>
    </div>
    <div></div>
    `
    return Container;
}

function RenderLearnsetTable(SpeciesID, Name) {
    let MoveSet = LearnsetData[SpeciesID-1];
    
    let PreEvoTable = document.getElementById("PreEvoMoveBody");
    let LevelupTable = document.getElementById("LvlMoveBody");
    let TMTable = document.getElementById("TMMoveBody");
    let TutorTable = document.getElementById("TutorMoveBody");
    let EggTable = document.getElementById("EggMoveBody");
    let EventTable = document.getElementById("EventMoveBody");
    
    let PreEvoMove = splitFunc(MoveSet.PrevoID)
    let LevelupLv = splitFunc(MoveSet.Lv)
    let LevelupMove = splitFunc(MoveSet.LMID)
    let TMMove = splitFunc(MoveSet.HMID)
    let TutorMove = splitFunc(MoveSet.TMID)
    let EggMove = splitFunc(MoveSet.EggID)
    let EventMove = splitFunc(MoveSet.EventID)
    
    PreEvoTable.innerHTML = "";
    if (PreEvoMove[0] != "-") {
        for (let i = 0; i < PreEvoMove.length; i++) {
            let row = CreateMoveRow(false, MoveData[PreEvoMove[i] - 50001]);
            PreEvoTable.appendChild(row)
        }
    } else {
        PreEvoTable.appendChild(CreateText(Name, "Pre-Evo"));
    }
    
    LevelupTable.innerHTML = "";
    if (LevelupLv[0] != "-") {
        for (let i = 0; i < LevelupLv.length; i++) {
            let row = CreateMoveRow(LevelupLv[i], MoveData[LevelupMove[i] - 50001]);
            LevelupTable.appendChild(row)
        }
    } else {
        LevelupTable.appendChild(CreateText(Name, "Level-Up"))
    }
    
    TMTable.innerHTML = "";
    if (TMMove[0] != "-") {
        for (let i = 0; i < TMMove.length; i++) {
            let row = CreateMoveRow(false, MoveData[TMMove[i] - 50001]);
            TMTable.appendChild(row)
        }
    } else {
        TMTable.appendChild(CreateText(Name, "TM"))
    }
    
    TutorTable.innerHTML = "";
    if (TutorMove[0] != "-") {
        for (let i = 0; i < TutorMove.length; i++) {
            let row = CreateMoveRow(false, MoveData[TutorMove[i] - 50001]);
            TutorTable.appendChild(row)
        }
    } else {
        TutorTable.appendChild(CreateText(Name, "Tutor"))
    }
    
    EggTable.innerHTML = "";
    if (EggMove[0] != "-") {
        for (let i = 0; i < EggMove.length; i++) {
            let row = CreateMoveRow(false, MoveData[EggMove[i] - 50001]);
            EggTable.appendChild(row)
        }
    } else {
        EggTable.appendChild(CreateText(Name, "Egg"))
    }
    
    EventTable.innerHTML = "";
    if (EventMove[0] != "-") {
        for (let i = 0; i < EventMove.length; i++) {
            let row = CreateMoveRow(false, MoveData[EventMove[i] - 50001]);
            EventTable.appendChild(row)
        }
    } else {
        EventTable.appendChild(CreateText(Name, "Event"))
    }
}

function CreateMoveRow(Lv, Move) {
    let Row = document.createElement("tr");
    if (Lv) {
        let cell = Row.insertCell(0);
        cell.innerText = Lv;
    }
    
    for (let j = 1; j < 7; j++) {
        let cell = document.createElement("td");
        let MoveValue = Object.values(Move)
            
        if (j == 2) {
            cell.innerHTML = TypeBox(MoveValue[j]).innerHTML;
        } else if (j == 3) {
            cell.innerHTML = `<img src='Assets/${MoveValue[j]}.png'>`;
        } else {
            cell.innerText = MoveValue[j];
        }
        Row.appendChild(cell)
    }
    
    Row.setAttribute("id", Move.UID)
    Row.setAttribute("onclick", `OpenMoveDetail(${Move.UID})`)
    
    return Row;
}

function CreateText(Name, Type) {
    let Box = document.createElement("div");
    let Text = `${Name} does not learn any ${Type} move.`;
    Box.innerText = Text;
    Box.setAttribute("class", "LearnSetBody");
    return Box;
}
