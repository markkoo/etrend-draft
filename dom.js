function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

function animation(duration, action) {
    let start = null;
    const animation = (timeStamp) => {
        if (!start) start = timeStamp;
        let runtime = timeStamp - start;
        let progress = runtime / duration;
        if (progress >= 1) {
            action(progress, true);
        }
        else {
            action(progress, false);
            window.requestAnimationFrame(animation);
        }
    }
    window.requestAnimationFrame(animation);
}

function slideDown(element) {
    element.style.display = 'block';
    const height = element.clientHeight;
    element.animate({
        height: [0, height + 'px'],
    }, {
        fillMode:'forwards',
        duration: 300,
    });
}

function slideUp(element) {
    const height = element.clientHeight;
    const animate = element.animate({
        height: [height + 'px', 0],
    }, {
        fillMode:'none',
        duration: 300,
    });

    animate.onfinish = function() {
        element.style.display = 'none';
    };
}

function slideToggle(element){
    let isOpen = window.getComputedStyle(element).display == 'block';
    if (isOpen) {
        slideUp(element);
    }
    else {
        slideDown(element);
    }
}







