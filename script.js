

// global variables
let nav = document.getElementById("nav-bar");
let navOrigPos = document.getElementById('nav-logo-bar');

let navOffsetThreshold = -41; // position of page where nav should adapt to a fixed nav

function navAdapt() {
    window.addEventListener('scroll', function(e) {
        let viewportOffsetNavOrigPos = navOrigPos.getBoundingClientRect();
      
        // this is relative to the viewport, i.e. the window
        let topNavOrigPos = viewportOffsetNavOrigPos.top;

        if(topNavOrigPos<navOffsetThreshold) {
            nav.classList.add('scroll-nav');
        } else {
            nav.classList.remove('scroll-nav');
        }

  
    });
}



// catalog items 
function catalogItems() {
    const catalog1 = document.getElementById('catalog-items-1');
    const catalog2 = document.getElementById('catalog-items-2');
    const catalog3 = document.getElementById('catalog-items-3');
    const catalog4 = document.getElementById('catalog-items-4');
    const catalogButton = document.querySelector('.catalog-arr-btn');
    const catalogButton2 = document.querySelector('.catalog-arr-btn2');
    const catalogButton3 = document.querySelector('.catalog-arr-btn3');
    const catalogButton4 = document.querySelector('.catalog-arr-btn4');

    // first set of images
    catalogButton.addEventListener('click', () => {
        catalog1.classList.remove('active');
        catalog1.classList.remove('show');
        catalog2.classList.add('show');
    });

    // second set of images
    catalogButton2.addEventListener('click', () => {
        catalog1.classList.add('show');
        catalog2.classList.remove('show');
    });


    
    // third set of images
    catalogButton3.addEventListener('click', () => {
        catalog3.classList.remove('active');
        catalog3.classList.remove('show');
        catalog4.classList.add('show');
    });

    // fourth set of images
    catalogButton4.addEventListener('click', () => {
        catalog3.classList.add('show');
        catalog4.classList.remove('show');
    });


    // individual images opening to full screen viewer 
    const catalogImageIds = new Array();
    const noOfImgs = 12; // max no. of images in catalog
    for(let i=0; i<noOfImgs; i++) { // add access to each img and push to array
        catalogImageIds.push(document.getElementById(`cat-img-${i+1}`));
    }
    // iterate over array to add event listeners
    catalogImageIds.forEach(img => img.addEventListener('click', () => {

            img.classList.add('active');

            document.querySelector('.cat-img-wrap').classList.add('active');

        }
    ));
    
    console.log(catalogImageIds);
    







}






// initialize all functionality
function init() {
    navAdapt();
    catalogItems();
    let mainTitle = document.getElementById('main-title');
    setTimeout(() => mainTitle.classList.add('main-title'), 500);
    console.log("Site running...");
}


// run application 
init();

onload

onload

onload