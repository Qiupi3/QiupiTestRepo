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

const tabBtn = document.querySelectorAll('.choiceButton');
for (let x = 0; x < tabBtn.length; x++) {
    const value = tabBtn[x].value;
    tabBtn[x].addEventListener('click', () => {
        renderTableHeader(value);
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

var targetSpecies = document.querySelector('#mainTable');

let config = {
    childList: true,
    attributes: true,
}

let callback = () => {
    var llTarget = document.querySelector('.SObs');
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    }
    
    const llObserver = new IntersectionObserver(function (entries) {
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
    var dex = document.querySelector("#SearchBar").getBoundingClientRect();
    var detail = document.getElementById("speciesDetail").style.display;
    if (detail == "block") {
        if (dex.bottom <= 20) {
            CloseDetails(false);
        }
    }

    var backTop = document.getElementById("backTop");
    if (dex.top < -5000) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }

    var nav = document.getElementById("sideNavButton");
    if (dex.bottom < -5 || dex.top > 100) {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}