function addFunctionalityToFlashCards() {
    let cardQs = document.querySelectorAll(".cardQ");
    for (var i = 0; i < cardQs.length; i++) {
        var cardQ = cardQs[i];
        addCardButtons(cardQ, i !== 0);
    }
    let cardAs = document.querySelectorAll(".cardA")
    for (var i = 0; i < cardAs.length; i++) {
        var cardA = cardAs[i];
        addCardButtons(cardA, false, false, true, i !== cardAs.length - 1);
    }

    let showAnss = document.querySelectorAll(".cardQ .showAns");
    for (const showAns of showAnss) {
        showAns.addEventListener('click', () => {
            showAns.offsetParent.offsetParent.style.transform = " translate(-50%,50%) rotate3d(0,1,0,180deg)";
            showAns.offsetParent.style.zIndex = "0";
        });
    }

    let showQuess = document.querySelectorAll(".cardA .showQues");
    for (const showQues of showQuess) {
        showQues.addEventListener('click', () => {
            showQues.offsetParent.offsetParent.style.transform = " translate(-50%,50%) rotate3d(0,1,0,0deg)";
            showQues.offsetParent.offsetParent.querySelector(".cardQ").style.zIndex = "1";
        });
    }

    let nextQuess = document.querySelectorAll(".cardA .next");
    for (const nextQues of nextQuess) {
        nextQues.addEventListener('click', () => {
            nextQues.offsetParent.querySelector(".showQues").click();
            nextQues.offsetParent.offsetParent.nextElementSibling.style.top = "0";
            nextQues.offsetParent.offsetParent.style.transform = "rotate3d(0,1,0,0deg) translate(100vw,-100vh)";
            nextQues.offsetParent.offsetParent.nextElementSibling.style.transform = "translate(-50%, 50%)";
        });
    }

    let prevQs = document.querySelectorAll(".cardQ .prev");
    for (const prevQ of prevQs) {
        prevQ.addEventListener('click', () => {
            prevQ.offsetParent.offsetParent.previousElementSibling.style.transform = " translate(-50%,50%)";
            prevQ.offsetParent.offsetParent.style.top = "200px";
            prevQ.offsetParent.offsetParent.style.transform = "rotateX(calc(260deg + var(--x))) rotateY(calc(180deg + var(--x))) rotateZ(calc(190deg + var(--x))) translate(-50%, 50%)";
        });
    }

    function addCardButtons(parent, p = true, sa = true, sq = false, n = false) {
        var elem;
        if (p) {
            elem = document.createElement('div');
            elem.classList.add('prev');
            elem.innerHTML = "Previous";
            parent.appendChild(elem);
        }
        if (sa) {
            elem = document.createElement('div');
            elem.classList.add('showAns');
            elem.innerHTML = "Show Answer";
            parent.appendChild(elem);
        }
        if (sq) {
            elem = document.createElement('div');
            elem.classList.add('showQues');
            elem.innerHTML = "Show Question";
            parent.appendChild(elem);
        }
        if (n) {
            elem = document.createElement('div');
            elem.classList.add('next');
            elem.innerHTML = "Next Question";
            parent.appendChild(elem);
        }
    }
}