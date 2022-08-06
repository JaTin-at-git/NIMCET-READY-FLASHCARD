let selectedQ = document.querySelector(".selectedQ");
let xInput = document.querySelector("#x");
let notoficationPannel = document.querySelector("#warning");
let checkboxes = document.querySelectorAll("input[type='checkbox']");
let generateQuestionsButton = document.querySelector("#getQuestionsButton");
let cardsID1 = document.querySelector(".cardsID1");

let q = 0;
let topicsSelected = {};

/////////////////

function main() {
    addListnerToCheckboxes();
    addListenerToRange();
    addListenerToGenerateQuestions();
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
            var maxQs = getMaxQuestions();
            xInput.setAttribute("min", q.toString());
            xInput.setAttribute("max", maxQs.toString());
            xInput.setAttribute("value", q.toString());
            selectedQ.innerHTML = "&nbsp;" + q.toString() + `/${maxQs} +&nbsp;`;
            console.log(topicsSelected);
        });
    }
}

function getMaxQuestions() {
    let sum = 0;
    for (const qna of qnaList) {
        for (const [topSel] of Object.entries(topicsSelected)) {
            if (qna._topic === topSel) {
                sum += 1;
                break;
            }
        }
    }
    return sum;
}

function addListenerToRange() {
    xInput.addEventListener('change', () => {
        q = parseInt(xInput.value);
        xInput.setAttribute("value", q.toString());
        selectedQ.innerHTML = "&nbsp;" + q.toString() + `/${getMaxQuestions()} +&nbsp;`;
    });
}


function addListenerToGenerateQuestions() {
    generateQuestionsButton.addEventListener('click', () => {
        if (q === 0) {
            slideNotification("Please select at least one topic.")
        } else if (getMaxQuestions() < q) {
            slideNotification("Please select more topic.")
        } else {
            //reinitialize the dictionary
            for (const [key] of Object.entries(topicsSelected)) {
                topicsSelected[key] = 1;
            }

            //get all the questions belonging to these topics
            //shuffle the array obtained
            //retrieve first 'q' questions
            cardsID1.innerHTML = "<h2>Try to answer these Flashcards</h2>";
            let ques = getRelatedQuestions();
            for (var i=0; i < ques.length; i++){
                var qna = ques[i];
                addFlashcard(qna.question, qna.answer, q-i);
            }
            addFunctionalityToFlashCards();

        }
    });
}

function getRelatedQuestions() {
    var ques = [];
    for (const qna of qnaList) {
        for (const [topSel] of Object.entries(topicsSelected)) {
            if (qna._topic === topSel) {
                ques.push(qna);
                break;
            }
        }
    }
    shuffleArray(ques);
    return ques.slice(0, q);
}

function addFlashcard(question, answer, zIndex) {
    var elem = document.createElement('div');
    elem.classList.add('card');
    elem.setAttribute("style","--x:"+(Math.random() * 3)+"deg");
    elem.style.zIndex = zIndex;
    elem.innerHTML = `
            <div class="cardQ">
                <div class="q">${question}</div>
            </div>
            <div class="cardA">
                <div class="a">${answer}</div>
            </div>`;
    console.log(question);
    cardsID1.appendChild(elem);
}


///utility
function slideNotification(message) {
    notoficationPannel.innerHTML = message;
    notoficationPannel.parentNode.style.top = "50px";
    setTimeout(() => {
        notoficationPannel.parentNode.style.top = "-100%";
    }, 3000);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}