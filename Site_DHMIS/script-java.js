"use strict";


document.addEventListener('DOMContentLoaded', function() {
 
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    const headerText = document.getElementById('header-title');
    const text = headerText.textContent;
    headerText.textContent = '';

    const radius = 200; 
    const angleStep = Math.PI / (text.length - 1); 


    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.color = getRandomColor();

  
        const angle = Math.PI - i * angleStep;


        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

 
        span.style.transform = `translate(${x}px, ${-y}px) rotate(${Math.PI - angle - Math.PI / 2}rad)`;

        headerText.appendChild(span);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var cryptik1 = document.querySelector('.cryptik1');
    var cryptik2 = document.querySelector('.cryptik2');
    var cryptik3 = document.querySelector('.cryptik3');

    moveRandomly(cryptik1);
    moveRandomly(cryptik2);
    moveRandomly(cryptik3);
});

function moveRandomly(element) {
    var maxX = window.innerWidth - element.offsetWidth;
    var maxY = window.innerHeight - element.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.eye');
    var fullScreenImage = document.createElement('img');
    fullScreenImage.src = 'images/noise.gif';
    
    button.addEventListener('click', function() {
        document.body.appendChild(fullScreenImage);
        fullScreenImage.classList.add('full-screen-image');
        
        setTimeout(function() {
            document.body.removeChild(fullScreenImage);
           
            window.location.href = "Site2.html"; 
        }, 5000);
    });
});

