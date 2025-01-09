//Script for Validation

function IsAbility(value) {
    var Ability = ["Stench","Drizzle","Speed Boost","Battle Armor","Sturdy","Damp","Limber","Sand Veil","Static","Volt Absorb","Water Absorb","Oblivious","Cloud Nine","Compound Eyes","Insomnia","Wind Rider",
"Immunity","Flash Fire","Shield Dust","Own Tempo","Suction Cups","Intimidate","Shadow Tag","Quick Draw","Wonder Guard","Levitate","Effect Spore","Synchronize","Clear Body","Natural Cure",
"Lightning Rod","Serene Grace","Swift Swim","Chlorophyll","Gulp Missile","Trace","Huge Power","Dragon's Maw","Inner Focus","Magma Armor","Water Veil","Magnet Pull","Soundproof","Rain Dish",
"Sand Stream","Pressure","Thick Fat","Early Bird","Flame Body","Run Away","Bad Company","Hyper Cutter","Pickup","Truant","Hustle","Cute Charm","Plus","Minus","Forecast","Sticky Hold","Shed Skin",
"Guts","Marvel Scale","Liquid Ooze","Overgrow","Blaze","Torrent","Swarm","Rock Head","Drought","Arena Trap","Purifying Salt","As One","Neutralizing Gas","Fatal Precision","Hunger Switch","As One",
"Sweet Veil","Skill Link","Motor Drive","Multiscale","Technician","Scrappy","Super Luck","Sniper","Regenerator","Prankster","Adaptability","Illuminate","Magic Bounce","Reckless","Sheer Force",
"Iron Fist","Rivalry","Sand Force","Solar Power","Heatproof","Dry Skin","Tinted Lens","Solid Rock","Stalwart","Infiltrator","Download","Poison Heal","Ice Body","Bull Rush","Hydration","SupremeOverlord",
"Anger Shell","Good as Gold","Snow Warning","Quick Feet","Sap Sipper","Overcoat","Magic Guard","Bulletproof","Gale Wings","Moxie","Aftermath","Cursed Body","Gooey","Mummy","Iron Barbs","Sand Rush","Analytic",
"No Guard","Mega Launcher","Tough Claws","Strong Jaw","Victory Star","Storm Drain","Dark Aura","Fairy Aura","Seed Sower","Refrigerate","Pixilate","Aerilate","Feline Prowess","Unburden","Simple","Unaware",
"Defiant","Competitive","Defeatist","Slow Start","Toxic Boost","Flare Boost","Fur Coat","Wonder Skin","Protean","Parental Bond","Mold Breaker","Hadron Engine","OrichalcumPulse","Zen Mode","Battle Bond","Beast Boost",
"Corrosion","Disguise","Emergency Exit","Fluffy","Steely Spirit","Perish Body","Wandering Soul","Power Construct","Tablets Of Ruin","ORAORAORAORA!","Schooling","Beads Of Ruin","Shields Down","Slush Rush","Soul-Heart",
"Stamina","Zerotohero","ThermalExchange","Triage","Water Bubble","WaterCompaction","Parasitic Waste","Multitype","Electric Surge","Grassy Surge","Misty Surge","Psychic Surge","Surge Surfer","Grass Pelt","Anger Point",
"Earth Eater","Forewarn","Frisk","Contrary","Unnerve","Weak Armor","Heavy Metal","Quark Drive","Steadfast","Imposter","Justified","Unseen Fist","Merciless","Aroma Veil","Toxic Debris","Leaf Guard","Electromrphosis",
"Flower Gift","Bad Dreams","Grim Neigh","Transistor","Poison Touch","Magician","Stance Change","Primordial Sea","Desolate Land","Delta Stream","Gorilla Tactics","Berserk","Primal Armor","Liquid Voice","Phoenix Down",
"Innards Out","Dazzling","Gluttony","Mountaineer","Friend Guard","Harvest","Telepathy","Illusion","Cheek Pouch","Protosynthesis","Stakeout","Comatose","Dancer","Bone Zone","Receiver","Self Sufficient","Neuroforce",
"Galvanize","Intrepid Sword","Valiant Shield","Striker","Cotton Down","Sword Of Ruin","Sharpness","Vessel Of Ruin","Steam Engine","Punk Rock","Sand Spit","Ice Scales","Ripen","Ice Face","Rocky Payload","Flamingsoul",
"Screen Cleaner","Well-Baked Body","Sage Power","Air Lock","Cacophony","Shell Armor","Pure Power","White Smoke","Vital Spirit","Keen Eye","Poison Point","Rough Skin","Color Change","Libero","Wimpout","Chillingneigh",
"Filter","Propeller Tail","Queenly Majesty","Blubber Defense","Full Metal Body","Quill Rush","Cash Splash","Powerofalchemy","Tanglinghair","Turboblaze","Teravolt","Armortail","Shadowshield","Prismarmor","Lingeringaroma"];
    
    //Filter value from number(stats)
    if (typeof(value) == 'string') {
        let TesAbility = splitFunc(value);
        //Check if value is Type from Type Array
        for (let x = 0; x < (Ability.length + 1); x++) {
            if (Ability.includes(TesAbility[x])) {
                return true;
            }
        }
    }
}

//Function to check if value is Type
function IsType(value) {
    var Type = ['Grass', 'Fire', 'Water', 'Bug', 'Poison', 'Normal', 'Flying', 'Dark',
    'Electric', 'Ground', 'Fairy', 'Psychic', 'Fighting', 'Rock', 'Steel', 'Ice', 'Ghost', 'Dragon'];
    //Filter value from number(stats)
    if (typeof(value) == 'string') {
        TesType = splitFunc(value);
        //Check if value is Type from Type Array
        if (Type.includes(TesType[0])) {
            return true;
        }
    }
}