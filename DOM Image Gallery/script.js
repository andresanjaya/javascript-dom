const container = document.querySelector('.container');
const bigImg = document.querySelector('.big-img');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        bigImg.src = e.target.src;
        bigImg.classList.add('fade');
        setTimeout(function() {
            bigImg.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb) {
            thumb.className = 'thumb';
        })

        e.target.classList.add('active');

    }
})