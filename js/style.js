$(function () {
    // visual text
    const targets = gsap.utils.toArray(".keyword");

    setTimeout(function () {
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
    }, 1500);

    const text =
        "변화를 두려워 하지않고 끊임없이 도전하고 배우며 성장하는 정희윤 입니다."; // 타이핑할 문구
    let index = 0;
    let speed = 50; // 글자 타이핑 속도 (밀리초 단위)

    setTimeout(function () {
        function typeWriter() {
            if (index < text.length) {
                document.getElementById("text").textContent +=
                    text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }, 2500);

    // header

    $("header li").on("mouseenter", function () {
        $(this).addClass("on");
    });
    $("header li").on("mouseleave", function () {
        $(this).removeClass("on");
    });

    $("header i").on("click", function () {
        $(this).addClass("on");
        $("nav").slideDown();
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

    //visual
    let upbox = document.querySelector(".con1_wrap");
    let txt = document.querySelector(".con1_txt");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#con1",
            pin: true,
            start: "top top",
            end: "bottom top",
            scrub: 2,
            markers: true,
        },
    });
    tl.to(txt, { opacity: "1", duration: "10" }, 30);
    tl.to(
        upbox,
        {
            scale: "0.5",
            duration: "10",
            opacity: "0.5",
        },
        10
    );

    // scroll
    let baseline = -200;
    let con1 = $("#con1").offset().top + baseline;
    let con2 = $("#con2").offset().top;
    let con3 = $("#con3").offset().top;
    let con4 = $("#con4").offset().top;

    // console.log(con1, con2, con3, con4, footer);

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        if (scroll >= con1) {
            // console.log("con1입니다.");

            $(".idphoto").addClass("on");
            $(".about p").addClass("on");
            $(".about .small").addClass("on");
            $(".personal li").addClass("on");
            $(".about h4").addClass("on");

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
            $(".about .small").removeClass("on");
            $(".personal li").removeClass("on");
            $(".about h4").removeClass("on");
        }

        if (scroll >= con4) {
            $(".snsicon div").addClass("on");
        } else {
            $(".snsicon div").removeClass("on");
        }
    });

    let list = gsap.utils.toArray(".ilust li");

    gsap.to(list, {
        xPercent: -100 * (list.length - 2),
        scrollTrigger: {
            trigger: "#con3",
            pin: true,
            scrub: 2,
            start: "-150px",
            end: "-550px",
            markers: true,
        },
    });
});
