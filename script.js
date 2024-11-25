document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.body;
    const questionElement = document.getElementById('question');
    const buttonContainer = document.getElementById('button-container');

    function changeBackground(image) {
        bodyElement.style.backgroundImage = `url(${image})`;
    }

    function updateContent(choice) {
        if (choice === 'kinosal') {
            questionElement.textContent = 
                "Du går ned trappa og finner Julenissen. 'Hei. Her kan du utføre en julequiz! Hvor mange spørsmål du svarer riktig på avgjør hvilken gave du får. Lykke til!'";
            changeBackground('./bilder/julenisse.jpg');
            buttonContainer.innerHTML = `
                <button id="startQuiz" aria-label="Start quiz">Start quiz</button>
            `;
            document.getElementById('startQuiz').addEventListener('click', () => {
                window.location.href = 'sporsmal.html';
            });
        } else if (choice === 'undersøk') {
            questionElement.textContent = 
                "Du undersøker rommet og møter en alv. 'Du må gå ned til rommet hvor nissen sitter.'";
            changeBackground('./bilder/rommet.jpg');
            buttonContainer.innerHTML = `
                <button id="goToNissen" aria-label="Gå til nissen">Gå til nissen</button>
            `;
            document.getElementById('goToNissen').addEventListener('click', () => {
                updateContent('kinosal');
            });
        }
    }

    document.getElementById('kinosal').addEventListener('click', () => updateContent('kinosal'));
    document.getElementById('undersøk').addEventListener('click', () => updateContent('undersøk'));
});
