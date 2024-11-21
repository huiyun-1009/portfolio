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
    let pin = document.querySelector("#con2 .portfolio");
    let portfolio = gsap.utils.toArray("#con2 .portfolio li");
    console.log(portfolio);

    gsap.utils.toArray(".portfolio li").forEach((li, index) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: li,
                start: "top 80%", // li가 화면에 80% 들어왔을 때 시작
                end: "top 20%", // li가 화면의 20% 지점에 있을 때 종료
                scrub: true, // 스크롤과 동기화
            },
        });

        // mokup (왼쪽에서 들어오기)
        timeline.to(
            li.querySelector(".mokup"),
            {
                x: 0, // 원래 위치로 이동
                opacity: 1, // 투명도 증가
                duration: 1,
            },
            0 // 시작 시간
        );

        // project (오른쪽에서 들어오기)
        timeline.to(
            li.querySelector(".project"),
            {
                x: 0, // 원래 위치로 이동
                opacity: 1, // 투명도 증가
                duration: 1,
            },
            0 // 시작 시간
        );

        // 전체 li가 위로 올라오는 효과
        timeline.to(
            li,
            {
                y: 0, // 위로 이동 (초기 translateY 제거)
                opacity: 1,
                duration: 1,
            },
            0
        );
    });

    let list = gsap.utils.toArray(".ilust li");

    gsap.to(list, {
        xPercent: -100 * (list.length - 2),
        scrollTrigger: {
            trigger: ".ilust",
            pin: true,
            scrub: 2,
            start: "center center",
            end: "-50%",
            markers: true,
        },
    });
});
