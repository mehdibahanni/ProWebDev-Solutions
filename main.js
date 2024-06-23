let nav       = document.querySelector('.nav');

let contianer = document.querySelector('.content-contianer');
let projects  = document.querySelector('.products');

let aboutSection = document.querySelector('.about-section');
let about = document.querySelector('.about');

let contactSection  = document.querySelector('.contact-section')
let contact = document.querySelector('.contact') 

projects.addEventListener('click', ()=>{
    height = contianer.offsetHeight;
    window.scrollBy(100, height); 
    contianer.scrollIntoView({
        behavior: 'smooth'
    });
})

about.addEventListener('click', ()=>{
    window.scrollBy(100, aboutSection.offsetHeight); 
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
})

contact.addEventListener('click', ()=>{
    window.scrollBy(60, (contactSection.offsetHeight)); 
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
})



window.addEventListener('scroll', change);
function change(){
    if(window.scrollY > nav.offsetHeight + 150){

        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
    if(window.scrollY > contianer.offsetHeight - 200 ){
     contianer.style.opacity = '1';
     contianer.style.gap = '50px';
    }else{
        contianer.style.opacity = '0';
        contianer.style.gap = '70px';

    }
};

const words = ['html', 'css', 'javaScript','PHP', 'MySQL', 'html5','css3'];
const container = document.querySelector('.skills');
const typeSpeed = 200; // milliseconds per character
const eraseSpeed = 100; // milliseconds per character
const pauseBetweenWords = 1000; // milliseconds

let wordIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeWriter() {
    if (!isErasing) {
        if (charIndex < words[wordIndex].length) {
            container.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            setTimeout(() => {
                isErasing = true;
                setTimeout(typeWriter, eraseSpeed);
            }, pauseBetweenWords);
        }
    } else {
        if (charIndex > 0) {
            container.textContent = container.textContent.slice(0, -1);
            charIndex--;
            setTimeout(typeWriter, eraseSpeed);
        } else {
            isErasing = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWriter, pauseBetweenWords);
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});
