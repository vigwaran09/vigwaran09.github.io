    function myFunction() {
        var vid = document.getElementById('firstVideo').requestFullscreen();
        var i = document.getElementById('firstVideo');

        // go full-screen
        if (i.requestFullscreen) {
            i.requestFullscreen();
        } else if (i.webkitRequestFullscreen) {
            i.webkitRequestFullscreen();
        } else if (i.mozRequestFullScreen) {
            i.mozRequestFullScreen();
        } else if (i.msRequestFullscreen) {
            i.msRequestFullscreen();
        }
    vid.play();
}

        function myFunctionScroll() {

    }

    function scrollTo(element, to = 0, duration = 1000) {

            const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

            const animateScroll = (() => {

        currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

                if (currentTime < duration) {
        setTimeout(animateScroll, increment);
    }
});

animateScroll();
};

        Math.easeInOutQuad = function (t, b, c, d) {

        t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
function ButtonOneClick() {
    location.href = 'Index.html';
};
function ButtonTwoClick() {
    location.href = 'Page2.html';
};
function ButtonThreeClick() {
    location.href = 'Page3.html';
};