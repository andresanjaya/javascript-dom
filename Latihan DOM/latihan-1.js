// Event Change Color
const btnChangeColor = document.getElementById('btnChangeColor');
btnChangeColor.onclick = function() {
    document.body.classList.toggle('light-blue');
}

// Event Randomize Color
const btnRandomizeColor =  document.getElementById('btnRandomizeColor');
btnRandomizeColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


// Slider Color
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sGreen.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sBlue.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

// Event Mousemove Color
document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255); 
    const yPos = Math.round((event.clientY / window.innerHeight) * 255); 
    // const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
})
