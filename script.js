const birthdayDate = document.getElementById("birthdayDate");
const checkDate = document.getElementById("checkDate");
const dateMessage = document.getElementById("dateMessage");
const afterCorrect = document.getElementById("afterCorrect");
const findOut = document.getElementById("findOut");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const moreButton = document.getElementById("moreButton");

const celebration = document.getElementById("celebration");
const celebrationConfetti =
    document.getElementById("celebrationConfetti");
const floatingSparkles =
    document.getElementById("floatingSparkles");

const blowButton =
    document.getElementById("blowButton");

const cutCakeButton =
    document.getElementById("cutCakeButton");

const cakeInstruction =
    document.getElementById("cakeInstruction");

const cake =
    document.querySelector(".cake");

const correctDate = "2026-09-28";

let candlesBlown = false;
let cakeCut = false;

let movingToPage2 = false;
let movingToPage3 = false;

let celebrationStarted = false;


/* =========================================
   SHAKE EFFECT
========================================= */

function shake(element) {

    if (!element) return;

    element.classList.remove("shake");

    void element.offsetWidth;

    element.classList.add("shake");
}


/* =========================================
   PAGE 1 — DATE CHECK
========================================= */

if (checkDate) {

    checkDate.addEventListener("click", function () {

        if (!birthdayDate.value) {

            dateMessage.textContent =
                "Choose a date first. 👀";

            dateMessage.classList.add("show");

            shake(birthdayDate);

            return;
        }


        if (birthdayDate.value === correctDate) {

            dateMessage.textContent =
                "Hmm... you got it. 👀✨";

            dateMessage.classList.add("show");

            birthdayDate.disabled = true;

            checkDate.disabled = true;

            checkDate.style.display = "none";


            setTimeout(function () {

                afterCorrect.classList.remove("hidden");

            }, 500);

        }

        else {

            dateMessage.textContent =
                "Not quite... try again. 🌸";

            dateMessage.classList.add("show");

            shake(birthdayDate);

        }

    });

}


/* =========================================
   PAGE 1 → PAGE 2
========================================= */

if (findOut) {

    findOut.addEventListener("click", function () {

        if (movingToPage2) return;

        movingToPage2 = true;


        findOut.innerHTML =
            "Something's coming... <span>→</span>";

        findOut.style.transform =
            "scale(.96)";


        setTimeout(function () {

            findOut.style.transform =
                "scale(1)";

        }, 150);


        setTimeout(function () {

            page1.classList.remove("active");

            page1.classList.add("leaving");


            setTimeout(function () {

                page1.classList.remove("leaving");

                page2.classList.add("active");

                startCelebration();

                movingToPage2 = false;

            }, 350);

        }, 550);

    });

}


/* =========================================
   CELEBRATION
========================================= */

function startCelebration() {

    if (celebrationStarted) return;

    celebrationStarted = true;

    celebration.classList.add("active");

    celebration.setAttribute(
        "aria-hidden",
        "false"
    );


    createConfetti();

    createSparkles();

    createStreamers();

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    if (!celebrationConfetti) return;

    celebrationConfetti.innerHTML = "";


    const colors = [

        "#ef4770",
        "#ff755e",
        "#f39b5e",
        "#b34dce",
        "#f4a7b9",
        "#f5c56b",
        "#ff8fab"

    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.style.left =
            `${Math.random() * 100}%`;


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            `${Math.random() * 1.2}s`;


        piece.style.animationDuration =
            `${3 + Math.random() * 2}s`;


        piece.style.width =
            `${5 + Math.random() * 6}px`;


        piece.style.height =
            `${8 + Math.random() * 10}px`;


        celebrationConfetti.appendChild(
            piece
        );

    }

}


/* =========================================
   SPARKLES
========================================= */

function createSparkles() {

    if (!floatingSparkles) return;

    floatingSparkles.innerHTML = "";


    for (let i = 0; i < 20; i++) {

        const sparkle =
            document.createElement("span");


        sparkle.className =
            "floating-sparkle";


        sparkle.textContent =
            Math.random() > 0.5
                ? "✦"
                : "✧";


        sparkle.style.left =
            `${Math.random() * 100}%`;


        sparkle.style.top =
            `${Math.random() * 100}%`;


        sparkle.style.animationDelay =
            `${Math.random() * 2}s`;


        sparkle.style.fontSize =
            `${12 + Math.random() * 12}px`;


        floatingSparkles.appendChild(
            sparkle
        );

    }

}


/* =========================================
   STREAMERS
========================================= */

function createStreamers() {

    if (!celebration) return;


    const colors = [

        "#ef4770",
        "#b34dce",
        "#ff9eaa",
        "#f5b85f",
        "#e783a5"

    ];


    for (let i = 0; i < 22; i++) {

        const streamer =
            document.createElement("span");


        streamer.className =
            "streamer";


        streamer.style.left =
            `${Math.random() * 100}%`;


        streamer.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        streamer.style.animationDelay =
            `${Math.random() * 1.2}s`;


        celebration.appendChild(
            streamer
        );


        setTimeout(function () {

            streamer.remove();

        }, 6000);

    }

}


/* =========================================
   PAGE 2 → PAGE 3
========================================= */

if (moreButton) {

    moreButton.addEventListener("click", function () {

        if (movingToPage3) return;

        movingToPage3 = true;


        moreButton.innerHTML =
            "Coming up... <span>→</span>";


        moreButton.style.transform =
            "scale(.96)";


        setTimeout(function () {

            moreButton.style.transform =
                "scale(1)";

        }, 150);


        setTimeout(function () {

            page2.classList.remove("active");

            page3.classList.add("active");


            if (celebration) {

                celebration.classList.remove(
                    "active"
                );

                celebration.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }


            movingToPage3 = false;

        }, 500);

    });

}


/* =========================================
   PAGE 3 — BLOW THE CANDLES
========================================= */

if (blowButton) {

    blowButton.addEventListener(
        "click",
        function () {

            if (candlesBlown) return;

            candlesBlown = true;


            page3.classList.add(
                "candles-out"
            );


            blowButton.innerHTML =
                "Wish made <span>✓</span>";


            blowButton.disabled = true;


            if (cakeInstruction) {

                cakeInstruction.innerHTML =
                    "The candles are out. <span>Now cut the cake.</span>";

            }


            if (cutCakeButton) {

                cutCakeButton.disabled =
                    false;

                cutCakeButton.classList.remove(
                    "disabled"
                );

            }

        }
    );

}


/* =========================================
   PAGE 3 — CUT THE CAKE
========================================= */

if (cutCakeButton) {

    cutCakeButton.addEventListener(
        "click",
        function () {

            if (!candlesBlown) return;

            if (cakeCut) return;

            cakeCut = true;


            page3.classList.add(
                "cake-cut"
            );


            if (cake) {

                cake.classList.add(
                    "cut"
                );

            }


            cutCakeButton.innerHTML =
                "Cake cut! <span>✓</span>";


            cutCakeButton.disabled =
                true;


            if (cakeInstruction) {

                cakeInstruction.innerHTML =
                    "And that's one slice closer to a wonderful year. ✨";

            }

            setTimeout(function () {

                page3.classList.remove("active");
                page4.classList.add("active");

            }, 1400);

        }
    );

}