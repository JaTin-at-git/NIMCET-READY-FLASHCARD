let selectedQ = document.querySelector(".selectedQ");
let xInput = document.querySelector("#x");
let notoficationPannel = document.querySelector("#warning");
let checkboxes = document.querySelectorAll("input[type='checkbox']");
let generateQuestionsButton = document.querySelector("#getQuestionsButton");
let cardsID1 = document.querySelector(".cardsID1");

let q = 0;
let topicsSelected = {};
let dictionary = {
    "PnC": PnC_TQA,
    "Probability": Probability_TQA
}

/////////////////

function main() {
    addListnerToCheckboxes();
    addListenerToRange();
    addListenerToGenerateFlashcards();
}

main();


///////////////

function addListnerToCheckboxes() {
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                topicsSelected[this.id] = 1;
            } else {
                delete topicsSelected[this.id];
            }
            q = Object.keys(topicsSelected).length;
            var maxQs = getMaxQuestions(topicsSelected);
            xInput.setAttribute("min", q.toString());
            xInput.setAttribute("max", maxQs.toString());
            xInput.setAttribute("value", q.toString());
            selectedQ.innerHTML = "&nbsp;" + q.toString() + `/${maxQs}&nbsp;`;
        });
    }
}

function getMaxQuestions(topicsSelected) {
    let sum = 0;
    for (const [topic] of Object.entries(topicsSelected)) {
        if (dictionary[topic]) {
            sum += (dictionary[topic].match(/T:/g) || []).length;
        }
    }
    return sum;
}

function addListenerToRange() {
    xInput.addEventListener('change', () => {
        q = parseInt(xInput.value);
        xInput.setAttribute("value", q.toString());
        selectedQ.innerHTML = "&nbsp;" + q.toString() + `/${getMaxQuestions(topicsSelected)} &nbsp;`;
    });
}


function addListenerToGenerateFlashcards() {
    generateQuestionsButton.addEventListener('click', () => {
        var maxQ = getMaxQuestions(topicsSelected);
        if (q === 0) {
            slideNotification("Please select at least one topic.")
        } else if (maxQ < q) {
            slideNotification("Please select more topic.")
        } else {
            //reinitialize the dictionary
            for (const [key] of Object.entries(topicsSelected)) {
                topicsSelected[key] = 1;
            }

            //divide the questions count evenly, almost evenly :)
            divideQuestionsCount(q - Object.entries(topicsSelected).length);

            //get the questions, shuffle them
            let ques = getQuestions();
            shuffleArray(ques);
            //console.log(ques)

            //add the cards
            document.querySelector(".scene").innerHTML = "<h2>Try to answer these Flashcards</h2>";
            for (var i = 0; i < ques.length; i++) {
                var qna = ques[i];
                addFlashcard(qna.question, qna.answer, 4 * i);
            }
            // perfectionizeHeightWidthOfCards();
            addFunctionalityToFlashCards();
        }
    });
}


//get random questions from differnt topics
function getQuestions() {
    var questions = [];
    for (const [key, value] of Object.entries(topicsSelected)) {
        if (topicsSelected[key] === 0) continue;
        var allQuestions = textToQuestions(dictionary[key]);
        // create two differnt qnos
        let qnos = [];
        while (qnos.length < value) {
            var r = Math.floor(Math.random() * (dictionary[key].match(/T:/g) || []).length);
            if (qnos.indexOf(r) === -1) qnos.push(r);
        }
        for (const qno of qnos) {
            questions.push(allQuestions[qno]);
        }
    }
    return questions;
}


function addFlashcard(question, answer, i) {
    var elem = document.createElement('div');
    elem.classList.add('card');
    elem.setAttribute('style', `--i: ${i}`);
    elem.innerHTML = `<div class="card__face card__face--front">
            <div class="q"><p>${question}</p></div>
            <div class="buttons">
                ${i === 0 ? "" : "<div class=\"prev\">previous</div>"}
                <div class="showAns">show answer</div>
            </div>

        </div>
        <div class="card__face card__face--back">
            <div class="a">${answer}</div>
            <div class="buttons">
                <div class="showQues">show Question</div>
                <div class="next">next</div>
            </div>
        </div>`;
    document.querySelector(".scene").appendChild(elem);
    ////console.log(question)
    ////console.log(answer)
    ////console.log("")
}

//function to convert text to Question objects array
function textToQuestions(text) {
    var qnas = [];
    var qnaAsTextArray = text.split(/(T:|Q:|A:)/).filter(function (e) {
        return String(e).match(/(T:|Q:|A:)/) ? "" : String(e).trim();
    });
    for (var i = 0; i < qnaAsTextArray.length; i += 3) {
        var ques = new QuestionAnswer(
            qnaAsTextArray[i],
            qnaAsTextArray[i + 1],
            qnaAsTextArray[i + 2],
            qnaAsTextArray[i + 1].trim().charAt(0) === "$" ? "latex-js" : "p",
            qnaAsTextArray[i + 2].trim().charAt(0) === "$" ? "latex-js" : "p");
        qnas.push(ques);
    }
    //console.log(qnas);
    return qnas;
}

//function to divide questions count evenly, almost evenly
//n questions are divided
function divideQuestionsCount(n) {
    ////console.log(topicsSelected)
    ////console.log(n)
    for (const [key] of Object.entries(topicsSelected)) {
        if (topicsSelected[key] === 0) continue;
        if (dictionary[key]) {
            if (((dictionary[key].match(/T:/g) || []).length > n) && (Math.random() < 0.5)) {
                topicsSelected[key] += 1;
                n--;
            }
        } else {
            topicsSelected[key] = 0;
            n++;
        }
    }
    if (n > 0) divideQuestionsCount(n);
}

//
// function perfectionizeHeightWidthOfCards() {
//     var maxHeight = 0;
//     var maxWidth = 0;
//     for (const card of document.querySelectorAll(".card")) {
//         var cmh = Math.max(card.querySelector(".cardQ").clientHeight, card.querySelector(".cardA").clientHeight);
//         if (maxHeight < cmh) maxHeight = cmh;
//         var cmw = Math.max(card.querySelector(".cardQ").clientWidth, card.querySelector(".cardA").clientWidth);
//         if (maxWidth < cmw) maxWidth = cmw;
//     }
//     console.log(maxWidth)
//     console.log(maxHeight)
//     for (const card of document.querySelectorAll(".card")) {
//         // card.style.height = maxHeight + "px";
//         // card.style.width = maxWidth + "px";
//         // card.querySelector(".cardQ").style.height = maxHeight + "px";
//         // card.querySelector(".cardA").style.height = maxHeight + "px";
//         // card.querySelector(".cardQ").style.width = maxWidth + "px";
//         // card.querySelector(".cardA").style.width = maxWidth + "px";
//     }
// }

///utility
function slideNotification(message) {
    notoficationPannel.innerHTML = message;
    notoficationPannel.parentNode.style.top = "50px";
    setTimeout(() => {
        notoficationPannel.parentNode.style.top = "-100%";
    }, 3000);
}

function shuffleArray(array) {
    //console.log(...array);
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    //console.log(array);
}
