(function ($) {
    "use strict";

    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    };

    /* Loader Code Start */
    $(window).on("load", function () {
        $(".section-loader").fadeOut("slow");

        var $container = $(".portfolioContainer");
        $container.isotope({
            filter: "*",
            animationOptions: {
                queue: true,
            },
        });

        $(".portfolio-nav li").click(function () {
            $(".portfolio-nav .active").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true,
                },
            });
            return false;
        });
    });
    /* Loader Code End */

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    var trigger = $(".navbar-toggler"),
        overlay = $(".overlay"),
        navc = $(".navbar-collapse"),
        active = false;

    $(".navbar-toggler, .navbar-nav li a, .overlay").on("click", function () {
        $(".navbar-toggler").toggleClass("active");
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass("active");
        navc.toggleClass("active");
    });

    /* counter */
    $(".counter").counterUp({
        delay: 12,
        time: 1200,
    });

    $(".js-modal-btn").modalVideo({ channel: "vimeo" });

    /*
    |=================
    | Onepage Nav
    |================
    */

    $("#zb-header").onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });

    /***********************************************************/
    /* COUNT DOWN                                              */
    /***********************************************************/

    $(".name").countdown({
        end_time: "2019/05/21 14:27:28 +0600",
        wrapper: function (unit) {
            var wrpr = $("<div></div>")
                .addClass(unit.toLowerCase() + "_wrapper")
                .addClass("col-sm-3")
                .addClass("col-xs-3")
                .addClass("col-md-3")
                .addClass("custom");
            var background = $("<div></div>").addClass("background").addClass("time").appendTo(wrpr);

            $('<span class="counter style_all"></span>').appendTo(background);
            $('<span class="title">' + unit + "</span>").appendTo(background);
            return wrpr;
        },
    });

    /*
    |=================
    | fancybox
    |================
    */

    $("#play-pause-button").on("click", function () {
        var mediaVideo = $("#bgdvid").get(0);
        var mediap = $("#bgdvid");
        var playbtn = $("#play-pause-button");
        if (mediaVideo.paused) {
            mediaVideo.play();
            mediap.parent().addClass("gobottom");
        } else {
            mediaVideo.pause();
            mediap.parent().removeClass("gobottom");
        }
    });

    $(".uv-accordinaton-list").on("click", function () {
        $(this)
            .closest("ul")
            .find(".uv-accordition-detail")
            .each(function () {
                if ($(this).css("display") == "block") {
                    $(this).slideUp(200);
                    $(this).closest("li").find("h2").removeClass("hilighted");
                    $(this).closest("li").find("h2").removeClass("color");
                    $(this).closest("li").find(".uv-right-arrow").text("+");
                    $(this).closest("li").removeClass("shadow-1");
                    return false;
                }
            });
        $(this).next().slideToggle(200);
        $(this).find(">:first-child");
        if ($(this).find(">:first-child").text() == "+") {
            $(this).find(">:first-child").text("-");
            $(this).find("h2").addClass("hilighted");
            $(this).find("h2").addClass("color");
            $(this).parent().addClass("shadow-1");
        } else {
            $(this).find(">:first-child").text("+");
            $(this).find("h2").removeClass("hilighted");
            $(this).parent().removeClass("shadow-1");
        }
    });

    /*
    |=====================
    | package tab
    |=====================
    */

    $("#zbTab a").on("click", function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    var wow = new WOW({
        mobile: false, // trigger animations on mobile devices (default is true)
    });
    wow.init();

    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });

    /*
    |=================
    | Client review
    |================
    */
    $("#mh-client-review").owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 10,
        stopOnHover: true,
        animateIn: "slideInRight",
        animateOut: "slideOutLeft",
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
        },
    });

    // gsap.registerPlugin(ScrollTrigger);
    // let speed = 100;

    // /*  SCENE 1 */
    // let scene1 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: scene1,
    //     trigger: ".scrollElement",
    //     start: "top top",
    //     end: "45% 100%",
    //     scrub: 3,
    // });

    // // hills animation
    // scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
    // scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
    // scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
    // scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
    // scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
    // scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
    // scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
    // scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
    // scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

    // //animate text
    // scene1.to("#info", { y: 1 * speed }, 0);

    // /*   Bird   */
    // gsap.fromTo(
    //     "#bird",
    //     { opacity: 1 },
    //     {
    //         y: -250,
    //         x: 800,
    //         ease: "power2.out",
    //         scrollTrigger: {
    //             trigger: ".scrollElement",
    //             start: "15% top",
    //             end: "60% 100%",
    //             scrub: 4,
    //             onEnter: function () {
    //                 gsap.to("#bird", { scaleX: 1, rotation: 0 });
    //             },
    //             onLeave: function () {
    //                 gsap.to("#bird", { scaleX: -1, rotation: -15 });
    //             },
    //         },
    //     }
    // );

    // /* Clouds  */
    // let clouds = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: clouds,
    //     trigger: ".scrollElement",
    //     start: "top top",
    //     end: "70% 100%",
    //     scrub: 1,
    // });

    // clouds.to("#cloud1", { x: 500 }, 0);
    // clouds.to("#cloud2", { x: 1000 }, 0);
    // clouds.to("#cloud3", { x: -1000 }, 0);
    // clouds.to("#cloud4", { x: -700, y: 25 }, 0);

    // /* Sun motion Animation  */
    // let sun = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: sun,
    //     trigger: ".scrollElement",
    //     start: "top top",
    //     end: "2200 100%",
    //     scrub: 1,
    // });

    // //sun motion
    // sun.to("#bg_grad", { attr: { cy: "330" } }, 0.0);

    // //bg change
    // sun.to("#sun", { attr: { offset: "0.15" } }, 0.0);
    // sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.0);
    // sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0);
    // sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0);
    // sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0);
    // sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

    // /*   SCENE 2  */
    // let scene2 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: scene2,
    //     trigger: ".scrollElement",
    //     start: "15% top",
    //     end: "40% 100%",
    //     scrub: 4,
    // });

    // scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
    // scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
    // scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
    // scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
    // scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
    // scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

    // /* Bats */
    // gsap.fromTo(
    //     "#bats",
    //     { opacity: 1, y: 400, scale: 0 },
    //     {
    //         y: 120,
    //         scale: 0.8,
    //         transformOrigin: "50% 50%",
    //         ease: "power3.out",
    //         scrollTrigger: {
    //             trigger: ".scrollElement",
    //             start: "40% top",
    //             end: "70% 100%",
    //             scrub: 3,
    //             onEnter: function () {
    //                 gsap.utils.toArray("#bats path").forEach((item, i) => {
    //                     gsap.to(item, { scaleX: 0.5, yoyo: true, repeat: 11, duration: 0.15, delay: 0.7 + i / 10, transformOrigin: "50% 50%" });
    //                 });
    //                 gsap.set("#bats", { opacity: 1 });
    //             },
    //             onLeave: function () {
    //                 gsap.to("#bats", { opacity: 0, delay: 2 });
    //             },
    //         },
    //     }
    // );

    // /* Sun increase */
    // let sun2 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: sun2,
    //     trigger: ".scrollElement",
    //     start: "2200 top",
    //     end: "5000 100%",
    //     scrub: 1,
    // });

    // sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
    // sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
    // sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
    // sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
    // sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
    // sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

    // /* Transition (from Scene2 to Scene3) */
    // gsap.set("#scene3", { y: 580, visibility: "visible" });
    // let sceneTransition = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: sceneTransition,
    //     trigger: ".scrollElement",
    //     start: "70% top",
    //     end: "bottom 100%",
    //     scrub: 3,
    // });

    // sceneTransition.to("#h2-1", { y: -680, scale: 1.5, transformOrigin: "50% 50%" }, 0);
    // sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
    // sceneTransition.to("#bg2", { y: 0 }, 0);

    // /* Scene 3 */
    // let scene3 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: scene3,
    //     trigger: ".scrollElement",
    //     start: "80% 50%",
    //     end: "bottom 100%",
    //     scrub: 3,
    // });

    // //Hills motion
    // scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
    // scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
    // scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
    // scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
    // scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

    // //stars
    // scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

    // // Scroll Back text
    // scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
    // scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

    // //gradient value change
    // scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
    // scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

    // /*   falling star   */
    // gsap.to("#fstar", {
    //     x: -700,
    //     y: -250,
    //     ease: "power4.out",
    //     scrollTrigger: {
    //         trigger: ".scrollElement",
    //         start: "4000 top",
    //         end: "6000 100%",
    //         scrub: 5,
    //         onEnter: function () {
    //             gsap.set("#fstar", { opacity: 1 });
    //         },
    //         onLeave: function () {
    //             gsap.set("#fstar", { opacity: 0 });
    //         },
    //     },
    // });

    // //reset scrollbar position after refresh
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // };

    // let fullscreen;
    // let fsEnter = document.getElementById("fullscr");
    // fsEnter.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     if (!fullscreen) {
    //         fullscreen = true;
    //         document.documentElement.requestFullscreen();
    //         fsEnter.innerHTML = "Exit Fullscreen";
    //     } else {
    //         fullscreen = false;
    //         document.exitFullscreen();
    //         fsEnter.innerHTML = "Go Fullscreen";
    //     }
    // });

    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop();
        $(".gsap").css({
            transform: "translateX(" + -3 * scrollTop + "px)",
        });
        $("#home-video").css({
            transform: "translateX(" + 3 * scrollTop + "px)",
        });
        $(".ev-scroll").css({
            transform: "translateY(" + 4 * scrollTop + "px)",
        });
        // $("#lx-2nd-text").css({
        //     transform: "translateY(" + -1 * scrollTop + "px)",
        // });
        // $("#lx-box").css({
        //     transform: "translateY(" + -2 * scrollTop + "px)",
        // });

        // $("#lx-2nd-text1").css({
        //     transform: "translateY(" + 0 * scrollTop + "px)",
        // });

        // gsap.to(".gsap", {
        //     scrollTrigger: {
        //         trigger: ".gsap",
        //     },
        //     rotation: 360,
        //     duration: 3,
        // });

        // gsap.set("#lx-2nd-text1", {xPercent: 0, yPercent: 0}),
        //     gsap.to("#lx-2nd-text1", {scale: 50, x: "-180%", scrollTop: {
        //         trigger: "#lx-2nd-text1",
        //         start: "top 40%",
        //         end: "+=2000",
        //         markers:true,
        //         pin:true,
        //         scrub: true

        //     }})
    });

    // //
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to("#lx-2nd-text1", {
    //     scrollTrigger: "#lx-2nd-text1", // start the animation when ".box" enters the viewport (once)
    //     start: 500,
    //     end: 0,
    // });
    // let speed = 100;

    // /*  SCENE 1 */
    // gsap.to({
    //     scroll
    //     animation: scene1,
    //     trigger: ".scrollElement",
    //     start: "top top",
    //     end: "45% 100%",
    //     scrub: 3,
    // });

    var t = TweenLite.from(".lx-2nd-text1", 1, {
            autoAlpha: 0,
            y: 300,
            paused: true,
            ease: Linear.easeNone,
        }),
        scrollThreshold = { start: 400, stop: 700 };

    $(window).on("scroll", function (e) {
        var currentScroll = $(window).scrollTop(),
            currentProgress = (currentScroll - scrollThreshold.start) / (scrollThreshold.stop - scrollThreshold.start);

        if (currentScroll > scrollThreshold.start && currentScroll < scrollThreshold.stop) {
            t.progress(currentProgress);
        } else if (currentScroll < scrollThreshold.start) {
            t.progress(0);
        } else if (currentScroll < scrollThreshold.stop) {
            t.progress(1);
        }
    });

    /*
    |=================
    | CONTACT FORM
    |=================
    */

    $("#contactForm")
        .validator()
        .on("submit", function (event) {
            if (event.isDefaultPrevented()) {
                // handle the invalid form...
                formError();
                submitMSG(false, "Did you fill in the form properly?");
            } else {
                // everything looks good!
                event.preventDefault();
                submitForm();
            }
        });

    function submitForm() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        $.ajax({
            type: "POST",
            url: "process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success: function (text) {
                if (text == "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            },
        });
    }
    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Sent!");
    }
    function formError() {
        $("#contactForm")
            .removeClass()
            .addClass("shake animated")
            .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                $(this).removeClass();
            });
    }
    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center fadeInUp animated text-success";
        } else {
            var msgClasses = "h3 text-center shake animated text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
})(jQuery);
