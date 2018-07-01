  // Initialize Firebase

var config = {
    apiKey: "AIzaSyALYzg69idKyJIjCqbA53szsJ0EaccAvqY",
    authDomain: "contactform-2e0d9.firebaseapp.com",
    databaseURL: "https://contactform-2e0d9.firebaseio.com",
    projectId: "contactform-2e0d9",
    storageBucket: "contactform-2e0d9.appspot.com",
    messagingSenderId: "98875352076"
};

firebase.initializeApp(config);

// Reference messages collection 
// initialize firebase database, with specific collection 'messages'
const messagesRef = firebase.database().ref('form-messages'); 

// global variables
const nav = document.getElementById("nav-bar");
const navOrigPos = document.getElementById('nav-logo-bar');

const navOffsetThreshold = -41; // position of page where nav should adapt to a fixed nav

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
function loadCatalogItems() {
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


/* Contact Page */

function loadContactPage() {
    // listen for form submit 
    let form = document.getElementById('contact-form');

    form.addEventListener('submit', submitForm);

}

// submitting form to Firebase 
function submitForm(e) {
    e.preventDefault();
    
    // Get values submitted with form
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    // saving form message to Firebase
    saveMessage(name, company, email, phone, message);

    // testing 
    console.log(name);
}

// get form values 
function getInputVal(id) {
    return document.getElementById(id).value; 
}

// function to save form data to Firebase database
function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messagesRef.push(); // this is part of firebase api, with .push() 
    newMessageRef.set({                     // it adds it to a list of data in the database, 
        name: name,                         // everytime generating a new unique key
        company: company,
        email: email,
        phone: phone, 
        message: message
    });
}





// initialize site javascript functionality
function init() {
    // load primary page functionalities 
    navAdapt();
    loadCatalogItems();
    loadContactPage();  

    // load main landing page 
    let mainTitle = document.getElementById('main-title');
    setTimeout(() => mainTitle.classList.add('main-title'), 500);
    console.log("Site running...");
}


// run application 
init();

