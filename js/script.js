
const typedText = ["Developer.", "Musician.", "Basketball Player.", "Cook"];
let typeIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const typeTextElement = document.querySelector(".type");

function type() {
    if (charIndex < typedText[typeIndex].length) {
        typeTextElement.textContent += typedText[typeIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 2000); 
    }
}

function erase() {
    if (charIndex > 0) {
        typeTextElement.textContent = typedText[typeIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed);
    } else {
        typeIndex = (typeIndex + 1) % typedText.length;
        setTimeout(type, typingSpeed + 500); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000); 
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
