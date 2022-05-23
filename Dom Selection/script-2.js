const h3 = document.getElementsByTagName('h3')[0];
h3.style.backgroundColor = 'lightblue';

// Event P1
const p1 = document.querySelector('.p1');
p1.addEventListener('click', function() {
    p1.style.backgroundColor = 'lightblue';
})
p1.addEventListener('click', function() {
    p1.style.color = 'red';
})

// Event P2
const p2 = document.querySelector('.p2');
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarnaP2;

// Event P3
const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
})
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightgreen';
})

// Event P4
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})



