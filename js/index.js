$(function () {
    Splitting();
    gsap.registerPlugin(ScrollTrigger);

    $("header li").on("mouseenter", function () {
        $(this).addClass("on");
    });
    $("header li").on("mouseleave", function () {
        $(this).removeClass("on");
    });

    $("#visual")
        .find(".st0")
        .each(function (index, path) {
            let length = path.getTotalLength();
            console.log(length);
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

    // $(".mokup img").on("mouseenter", function () {
    //     $(this).addClass("on");
    //     $(".mokup .click").addClass("on");
    // });
    // $(".mokup img").on("mouseleave", function () {
    //     $(".mokup .click").removeClass("on");
    // });

    //scroll effect

    let con1 = $("#con1").offset().top;
    let con2 = $("#con2").offset().top;
    let con3 = $("#con3").offset().top;
    let con4 = $("#con4").offset().top;
    let footer = $("footer").offset().top;

    console.log(con1, con2, con3, con4, footer);

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        if (scroll > visual && scroll < con1) {
            console.log("con1입니다.");
            $(".idphoto").addClass("on");
            $(".about li").addClass("on");
            $(" #con1 .about p").each(function (index) {
                $(this)
                    .delay(index * 300)
                    .queue(function (next) {
                        $(this).addClass("on");
                        next();
                    });
            });

            if (scroll > con2 && scroll <= con3) {
                $("header").addClass("on");
                $("#con2 li .project").addClass("on");
                $("#con2 li .mokup").addClass("on");
            } else {
                $("header").removeClass("on");
                $("#con2 li .project").removeClass("on");
                $("#con2 li .mokup").removeClass("on");
            }
        }

        let portfolio = gsap.utils.toArray("#con2 .portfolio li");

        gasp.ti(portfolio, {
            yPercent: -100 * (portfoil.length - 2),
            scrollTrigger: ".portfolio",
            pin: true,
            scrub: 2,
            start: "center center",
            end: "200%",
            markers: true,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#con3 .ilust",
                start: "top 90%",
                end: "20% 100%",
                scrub: 2,
                markers: true,
            },
        })
            .to(
                "#con3 li:nth-child(1)",
                { y: "-200px", duration: 1, ease: "none" },
                0.2
            )
            .to(
                "#con3 li:nth-child(2)",
                { y: "0px", duration: 1, ease: "none" },
                0.4
            )
            .to(
                "#con3 li:nth-child(3)",
                { y: "-400px", duration: 1, ease: "none" },
                0.6
            )
            .to(
                "#con3 li:nth-child(4)",
                { y: "-400px", duration: 1, ease: "none" },
                0.8
            )
            .to(
                "#con3 li:nth-child(5)",
                { y: "-400px", duration: 1, ease: "none" },
                1
            )
            .to(
                "#con3 li:nth-child(6)",
                { y: "-400px", duration: 1, ease: "none" },
                1.2
            );
    });
});

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#con2",
//         start: "bottom 90%",
//         end: "20% 100%",
//         scrub: 2,
//         markers: true,
//         pin: "#con2",
//     },
// });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#con2 .portfolio",
//         start: "center center",
//         end: "20% 100%",
//         scrub: 2,
//         markers: true,
//         pin: "#con2 li",
//     },
// });

// let panels = gsap.utils.toArray("#con2 .portfolio li");
// //선택자
// panels.forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         end: "bottom top",
//         pin: "#con2",
//         scrub: 0.5,
//         pinSpacing: false,
//     });
// });
// ScrollTrigger.create({
//     trigger: "#con2",
//     start: "top top",
//     end: "bottom 150px",
//     pin: "#con2 .portfolio li:nth-child(1)",
// });

// ScrollTrigger.create({
//     trigger: "#con2",
//     start: "top center",
//     end: "+=200", // 200px past the start
//     pin: "#con2 .portfolio li:nth-child(2)",
// });
