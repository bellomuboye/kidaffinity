// All Custom JS
    // @package asb

// 'use strict';

// Selector shortening helpers




// Zoom out hero effect
    function zoomHero() {
        function $(selector) { return document.querySelector(selector); };
        function $$(selector) { return Array.from(document.querySelectorAll(selector)); };

        'use strict';
    
        var
            footer = $('.footer'),
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
                // hero.style.transform      = `scale(${scaleValue}) translateY((-100 * ${scaleValue}px)`;
                heroBg.style.opacity      = 1 - (scrollPercentage * opacitySpeed);
            };
            if (scaleValue < 0.5) {
              footer.style.display = "flex";
            } else {footer.style.display = "none"}
        };

        
    };
    zoomHero();

    function changebg () {
        $(window)
        .scroll(function () {
          // selectors
          var $window = $(window),
            $bgChangeCont = $(".bg-change"),
            $panel = $(".panel");

          // Change 33% earlier than scroll position so colour is there when you arrive.
          var scroll = $window.scrollTop() + $window.height() / 3;

          $panel.each(function () {
            var $this = $(this);


            // if position is within range of this panel.
            // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
            // Remember we set the scroll to 33% earlier in scroll var.
            if (
              $(this).position().top <= scroll &&
              $(this).position().top + $this.height() < scroll
            ) {
              // Remove all classes on body with color-
              $bgChangeCont.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
              });

              // Add class of currently active div
              $bgChangeCont.addClass("color-" + $(this).data("color"));
            }
          });
        })
        .scroll();
    };

    changebg();
