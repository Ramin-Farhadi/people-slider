// Object of faculties description
const faculties = [
    {   
        id:1,
        title: 'Charles brown',
        imageAddress: './pictures/personPic.png',
        subtitle: 'Web developer II',
        des: 'At Humane, I can feel the love, care, and respect everyone has for one another.'
    },
    {   
        id:2,
        title: 'Nick green',
        imageAddress: './pictures/personPic1.png',
        subtitle: 'Web developer II',
        des: 'At Humane, I can feel the love, care, and respect everyone has for one another.'
    },
    {
        id:3,
        title: 'Sophia pink',
        imageAddress: './pictures/personPic5.png',
        subtitle: 'Web developer II',
        des: 'At Humane, I can feel the love, care, and respect everyone has for one another.'
    },
]

// Variables
const slides = []
let counter = 0;
let pagination = '';
let circleBehavior = '';

// Controllers
const sliderContext = document.querySelector('#slider-context');
const sliderPagination = document.querySelector('#sliderPagination');
const textBox = document.querySelector('.sliderTextBox');

faculties.forEach(element => {
    const slide = `
        <div class="col-xs-12 col-lg-6 text-center text-light h-100">
            <img class="" src="${element.imageAddress}" alt="${element.title}"  />
        </div>
        <div  class="col-xs-0 col-lg-6 text-light sliderTextBox">
            <p class="employeeName display-4 font-weight-bold">${element.title}</p>
            <p class="employeeTitle h3" >${element.subtitle}</p>
            <br>
            <p class="employeeDesc h5">${element.des}</p>
        </div>`;

    slides.push(slide);
})
sliderContext.innerHTML = slides[counter]

// Events
// Pagination Function 
const paginationFunc = (counter) => {
    pagination = '';
    slides.forEach((element, index) => {
            index === counter ? circleBehavior = 'yellow' : circleBehavior = 'white';
            pagination += `<svg style="display:block" height="50" width="50">
            <circle cx="25" cy="25" r="5" stroke="black" stroke-width="1" fill="${circleBehavior}" />
            </svg>`
    })
    sliderPagination.innerHTML= pagination
}
paginationFunc(counter);

// Counter increment function
// function incrementCounter() {
//     counter++;
//     if (counter >= slides.length) {
//         counter = 0   
//     }
//     sliderContext.innerHTML = slides[counter];
//     paginationFunc(counter)
//   }
  
//   setInterval(incrementCounter, 7000);

// scrolling Function

let scrolling = false;

scrollFunc = (event) => {
    // Check if scrolling action is in progress
    if(scrolling) {
        return
    }
    // Set the scrolling flag to true
     scrolling = true;

    if(event.deltaY > 0){ 
        counter++; 
    } else if (event.deltaY < 0) { 
        counter--;
    }
    if (counter >= slides.length) {
        counter = 0
        
    }else if (counter < 0) {
        counter = slides.length - 1;
    }
    sliderContext.innerHTML = slides[counter];
    paginationFunc(counter)

    // Reset the scrolling flag after the delay
    setTimeout(() => {
        scrolling = false;
    }, 1500); // 1000 milliseconds (1 second) delay
}