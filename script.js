// All Custom JS
    // @package asb

'use strict';

// Selector shortening helpers
function $(selector) { return document.querySelector(selector); };
function $$(selector) { return Array.from(document.querySelectorAll(selector)); };



// Zoom out hero effect
    function maineffect() {
        'use strict';
    
        var
            hero            = $('[data-action="hero"]'),
            heroHeight      = hero.getBoundingClientRect().height,
            heroBg          = $('[data-action="hero-background"]'),
            // heroContent     = $('[data-action="hero-content"]'),
            heroBgHeight    = heroBg.getBoundingClientRect().height,
            scaleSpeed      = 0.3,
            opacitySpeed    = 1;
        hero.style.zIndex = 2;
        triggerAnimation();
        window.addEventListener('resize', triggerAnimation, false);
    
        function triggerAnimation() {
            window.addEventListener('scroll', function () {
                (window.scrollY > heroHeight) ? hero.style.zIndex = 0 : hero.style.zIndex = 2;
                window.requestAnimationFrame(zoomOut);
            })
        }
    
        function zoomOut() {
            var
                scrollPercentage    = (window.scrollY / heroBgHeight).toFixed(5),
                scaleValue          = 1 - scrollPercentage * scaleSpeed;
            
            if (window.scrollY < heroBgHeight) {
                hero.style.transform      = `scale(${scaleValue}) translateZ(0)`;
                heroBg.style.opacity      = 1 - (scrollPercentage * opacitySpeed);
                // heroContent.style.opacity = 1 - (scrollPercentage * opacitySpeed);
            }
        }
    };
    maineffect();
