document.addEventListener('DOMContentLoaded', function () {
    const hoverEffectElements = document.querySelectorAll('.hover-effect');

    hoverEffectElements.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            element.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease, border 0.1 ease';
            element.style.transform = 'scale(1.04)';
            element.style.boxShadow = 'box-shadow: 0 0 30px 10px #ececec';
            element.style.border = 'border: 3px solid #000000'
        });
        
        element.addEventListener('mouseout', function () {
            element.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            element.style.transform = 'scale(1)';
            element.style.boxShadow = 'box-shadow: 0 0 20px 5px #d5d5d5'; 
            element.style.border = 'border: 3px solid #ccc'
        });
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const clickEffectElements = document.querySelectorAll('.clickable');

    clickEffectElements.forEach(function (element){
        
    })
})