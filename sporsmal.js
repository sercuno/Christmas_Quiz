let score = 0;

document.getElementById("quiz-1").classList.add("active");

function checkAnswer(button, correctAnswer, nextQuizId) {
    const parentContainer = button.closest(".quiz-container");
    const resultDiv = parentContainer.querySelector(".result");
    const userAnswer = button.innerText;

    if (resultDiv.innerHTML !== "") return;

    if (userAnswer === correctAnswer) {
        resultDiv.innerHTML = "Riktig!";
        resultDiv.classList.add("correct");
        score++;
    } else {
        resultDiv.innerHTML = `Feil! Riktig svar er: ${correctAnswer}`;
        resultDiv.classList.add("incorrect");
    }

    document.getElementById("score-display").innerText = `Poeng: ${score}`;

    setTimeout(() => {
        parentContainer.classList.remove("active");
        const nextQuiz = document.getElementById(nextQuizId);
        if (nextQuiz) {
            nextQuiz.classList.add("active");
        }
        if (nextQuizId === 'end') {
            displayGift();
        }
    }, 500);
}

function displayGift() {
    const giftContainer = document.getElementById('gift-container');
    let gift;
    let giftImageUrl;

    switch (score) {
        case 1:
            gift = "Kull";
            giftImageUrl = "./bilder/kull.jpg";
            break;
        case 2:
            gift = "En sokk";
            giftImageUrl = "./bilder/sokk.jpeg";
            break;
        case 3:
            gift = "En kake";
            giftImageUrl = "./bilder/kake.jpeg";
            break;
        case 4:
            gift = "En julebok";
            giftImageUrl = "./bilder/julebok.jpg";
            break;
        case 5:
            gift = "En julegenser";
            giftImageUrl = "./bilder/julegenser.jpeg";
            break;
        case 6:
            gift = "En iPhone";
            giftImageUrl = "./bilder/iphone.jpg";
            break;
        default:
            gift = "Ingen gave";
    }

    const giftMessage = document.createElement("p");
    giftMessage.textContent = `Du fikk: ${gift}`;
    giftContainer.appendChild(giftMessage);

    if (giftImageUrl) {
        const giftImage = document.createElement("img");
        giftImage.src = giftImageUrl;
        giftImage.alt = gift;
        giftImage.style.maxWidth = "100%";
        giftImage.style.borderRadius = "10px";
        giftContainer.appendChild(giftImage);
    }
}
