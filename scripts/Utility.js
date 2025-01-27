//Reusable & UI Function
//Function to split 2 words string

function splitFunc(x) {
    try {
        const y = x.split(/, |; /);
        return y;
    } catch(err) {
        return [x];
    }
}

const tabBtn = document.querySelectorAll('.ChoiceBtn');
for (let x = 0; x < tabBtn.length; x++) {
    const value = tabBtn[x].id;
    tabBtn[x].addEventListener('click', () => {
        // renderheader
        lazyLoad(value, true);
        updateHistoryURL(value);
        updateChoiceBtn(tabBtn[x]);
    });
}

const updateChoiceBtn = function (btn) {
    const currentActiveBtn = document.querySelector('.activeChoice');
    currentActiveBtn.classList.remove('activeChoice');
    btn.classList.add('activeChoice');
}

//Function to search Value from Search Bar
// function Search() {
//     let SearchBar = document.getElementById("SearchBar");
//     let SearchValue = SearchBar.value.toLowerCase();
//     if (SearchValue.length > 2) {
//         observer.disconnect();
//         SearchedData = SpeciesData.filter(item => item.Name.toLowerCase().indexOf(SearchValue) > -1);
//         LazyLoad(Search, true);
//     } else {
//         observer.observe(targetSpecies, config);
//         LazyLoad(Species, true);
//     }
// }

/* Set the width of the side navigation to 200px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var targetSpecies = document.querySelector('.active');

let config = {
    childList: true,
    attributes: true,
}

let callback = (mutationList) => {
    var llTarget = document.querySelector('.SObs');
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    }
    
    const llObserver = new IntersectionObserver(function (entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                llObserver.disconnect();
                lazyLoad(llTarget.classList[1]);
            }
        })
    }, options);
    llObserver.observe(llTarget);
}

const tableObserver = new MutationObserver(callback);
tableObserver.observe(targetSpecies, config);

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.onscroll = function() {
    var Dex = document.querySelector("#SearchBar").getBoundingClientRect();
    var Detail = document.getElementById("SpeciesDetail").style.display;
    if (Detail == "block") {
        if (Dex.bottom <= 20) {
            CloseDetails(false);
        }
    }

    var BackTop = document.getElementById("BackTop");
    if (Dex.top < -10000) {
        BackTop.style.display = "block";
    } else {
        BackTop.style.display = "none";
    }

    var nav = document.getElementById("Nav");
    if (Dex.bottom < -5 || Dex.top > 100) {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}