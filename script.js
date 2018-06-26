

// variables

let nav = document.getElementById("nav-bar");
let navOrigPos = document.getElementById('nav-logo-bar');

let navOffsetThreshold = -41; // position of page where nav should adapt to a fixed nav

function navAdapt() {
    window.addEventListener('scroll', function(e) {
        let viewportOffsetNavOrigPos = navOrigPos.getBoundingClientRect();
      
        // these are relative to the viewport, i.e. the window

        let topNavOrigPos = viewportOffsetNavOrigPos.top;
        console.log(`topNavOrigPos: ${topNavOrigPos}`);
        if(topNavOrigPos<navOffsetThreshold) {
            nav.classList.add('scroll-nav');
        } else {
            nav.classList.remove('scroll-nav');
        }

  
    });
}


// initialize all functionality
function init() {
    navAdapt();

    let mainTitle = document.getElementById('main-title');
    setTimeout(() => mainTitle.classList.add('main-title'), 500);
    console.log("Site running...");
}


// run application 
init();
