let terms = [];

function saveTerm() {
    let termInput = document.getElementById('termInput').value.trim();
    let defineInput = document.getElementById('defineInput').value.trim();

    if(termInput !== '' && defineInput !== ''){
        terms.push({
            term: termInput,
            definition: defineInput
        });
        termInput = document.getElementById('termInput').value = '';
        defineInput = document.getElementById('defineInput').value = '';
        console.log(terms);
    } else {
        document.getElementById('flashcardGrid').innerHTML = 'Please enter term and definition';
    }
};

function generateFlashcards() {
    if (terms.length === 0) {
        document.getElementById('flashcardGrid').innerHTML = 'Please enter at least 1 term first';
    } else {
        const grid = document.getElementById("flashcardGrid");
        let html = '';

        for (let i = 0; i < terms.length; i++){
            html+= `
                <div class="flashcard" onclick="flipCard(${i})">
                    <div class="flashcard-inner" id="${i}">
                        <div class="card-face front">
                        ${terms[i].term}
                        </div>

                        <div class="card-face back">
                        ${terms[i].definition}
                        </div>
                    </div>
                </div>
            `;
        }

        grid.innerHTML = html;
    }   
};

function flipCard(index) {
    let card = document.getElementById(index);

    if (card.style.transform === 'rotateY(180deg)') {
        card.style.transform = 'rotateY(0deg)';
    } else {
        card.style.transform = 'rotateY(180deg)';
    }
};

function clearAll(){
    terms = [];

    document.getElementById("flashcardGrid").innerHTML = '';
};