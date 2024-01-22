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

// Controllers
const sliderContext = document.querySelector('#slider-context')

slides = []
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

counter = 0;
sliderContext.innerHTML = slides[counter]
console.log(slides)
// Events

scrollFunc = (event) => {
    event.deltaY > 0 ? counter++ : event.deltaY < 0 ? counter-- : "";
    if (counter >= slides.length) {
        counter = 0
    }else if (counter < 0) {
        counter = slides.length - 1;
    }
    sliderContext.innerHTML = slides[counter];
    
}