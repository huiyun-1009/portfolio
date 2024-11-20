$(function () {
    // visual text
    const targets = gsap.utils.toArray(".keyword");

    targets.forEach((target) => {
        let SplitClient = new SplitType(target, {
            type: "lines, words, chars",
        });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;

        gsap.from(chars, {
            yPercent: 50,
            autoAlpha: 0,
            duration: 1,
            ease: "circ.out",
            stagger: {
                amount: 1,
                from: "random",
            },
            scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "+=400",
                markers: true,
            },
        });
    });
    // header

    $("header li").on("mouseenter", function () {
        $(this).addClass("on");
    });
    $("header li").on("mouseleave", function () {
        $(this).removeClass("on");
    });

    $("header i").on("click", function () {
        $(this).addClass("on");
        $("nav").show(500);
    });
    $("nav i").on("click", function () {
        $("nav").hide();
        $("header i").removeClass("on");
    });

    $("nav li").on("mouseenter", function () {
        $(this).addClass("on");
    });
    $("nav li").on("mouseleave", function () {
        $(this).removeClass("on");
    });

    // scroll
    let baseline = -200;
    let con1 = $("#con1").offset().top + baseline;
    let con2 = $("#con2").offset().top;
    let con3 = $("#con3").offset().top;
    let con4 = $("#con4").offset().top + baseline;
    let footer = $("footer").offset().top;

    // console.log(con1, con2, con3, con4, footer);

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        if (scroll >= con1) {
            // console.log("con1입니다.");

            $(".idphoto").addClass("on");
            $(".about p").addClass("on");
            $(".about .small").addClass("on");
            $(".personal li").addClass("on");

            //$(" #con1 .about p").each(function (index) {
            //    $(this)
            //        .delay(index * 50)
            //        .queue(function (next) {
            //            $(this).addClass("on");
            //           next();
            //       });
            // });
        } else {
            $(".idphoto").removeClass("on");
            $(".about p").removeClass("on");
        }

        if (scroll >= con4) {
            $(".snsicon div").addClass("on");
        }
    });
    let portfolio = gsap.utils.toArray("#con2 .portfolio li");
    console.log(portfolio);

    // gasp.to(portfolio, {
    //     yPercent: -100 * (portfoil.length - 2),
    //     scrollTrigger: ".portfolio",
    //     pin: true,
    //     scrub: 2,
    //     start: "center center",
    //     end: "200%",
    //     markers: true,
    // });

    let list = gsap.utils.toArray(".ilust li");

    gsap.to(list, {
        xPercent: -100 * (list.length - 2),
        scrollTrigger: {
            trigger: ".ilust",
            pin: true,
            scrub: 2,
            start: "center center",
            end: "30%",
            markers: true,
        },
    });
});
