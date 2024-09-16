window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
    var scrollPos = window.scrollY;
    var windowHeight = window.innerHeight;

    var animateDiv = document.querySelector('.animateDiv');
    var advice = document.querySelector('.advice');

    // Check if the features element exists before accessing its offsetTop
    if (animateDiv) {
        var animatePos = animateDiv.offsetTop;
        if (scrollPos > (animatePos - windowHeight / 3)) {
            animateDiv.classList.add('in-view');
        }
    } else {
        console.warn('No element with class .features found.');
    }


}
