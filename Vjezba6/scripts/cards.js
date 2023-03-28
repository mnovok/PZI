{
    const heartIcons = document.querySelectorAll('#cards-container .card .heart-icon');

    for (let index = 0; index < heartIcons.length; index++) {
        const heartIcon = heartIcons[index];
        
        heartIcon.addEventListener('click', handleHeartIconClick);
    }

    function handleHeartIconClick(event){
        const heartIcon = event.currentTarget;

        if(heartIcon.classList.contains('fa-heart-o')){ //ako sadrzava
            heartIcon.classList.remove('fa-heart-o');
            heartIcon.classList.add('fa-heart');
        }

        else if(heartIcon.classList.contains('fa-heart')){
            heartIcon.classList.remove('fa-heart');
            heartIcon.classList.add('fa-heart-o');
        }
    }


    // PLUS IKONE

    const plusIcons = document.querySelectorAll('#cards-container .card .add-paragraph-icon');

    for (let index = 0; index < plusIcons.length; index++) {
        const plusIcon = plusIcons[index];
        
        plusIcon.addEventListener('click', handlePlusIconClick);
    }

    function handlePlusIconClick(event){
        const text = prompt('Input new paragraph: ');

        //dodaj samo ako nije prazno
        if(text){

        const newParagraph = document.createElement('p'); //stvori element p
        newParagraph.textContent = text; //mozemo mijenjati svojstva newParagraph-a

        const addParagraphIcon = event.currentTarget; //dohvaca plus ikonu

        //u kojoj se kartici nalazi
        const card = addParagraphIcon.parentElement;

        card.appendChild(newParagraph);

        }
    }

    //const text = `Zelis li izbrisati ovu karticu ${title}`


    //KRIZIC

    const removeIcons = document.querySelectorAll('#cards-container .card .delete-button');

    for (let index = 0; index < removeIcons.length; index++) {
        const removeIcon = removeIcons[index];
        
        removeIcon.addEventListener('click', handleRemoveIconClick);
    }

    function handleRemoveIconClick(event){

        const title = event.currentTarget.parentElement.querySelector("h3").textContent;


        if(confirm(`Do you wish to remove card ${title}?`)){
            event.currentTarget.parentElement.remove();
        }
    }
}