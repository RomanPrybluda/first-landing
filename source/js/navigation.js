(function() {
    var me = {};

    me.toggleToActiveLink = function(target) {
        var links = document.querySelectorAll('.nav__link');
        var showedSection = target.dataset.link;

        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active')
            }
        }

        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection);
    };

    function scrollToActiveSection(showedSection) {
    var section = document.querySelector('.' + showedSection);
    var coords = section.getBoundingClientRect();
    var startY = window.scrollY;
    var targetY = coords.top + startY; // координата, до которой нужно прокрутить

    var duration = 400; // продолжительность анимации в миллисекундах
    var start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;

        // Эффект "easeInOutQuad"
        var easeInOutQuad = function(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t };

        window.scrollTo(0, startY + (targetY - startY) * easeInOutQuad(Math.min(progress / duration, 1)));

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}


    MYFL.navigation = me;
}());