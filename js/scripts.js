(function() {
    const list = document.querySelectorAll('.container > nav > ul > li');
    list.forEach( ( li ) => {
        li.addEventListener('click', function() {
            removeHighlightClass();
            li.classList.add('highlight');
        });
    } );

    function removeHighlightClass() {
        list.forEach( ( li ) => {
            li.classList.remove('highlight');
        } );
    }
})();

function moveToSection(section) {
    document.getElementById(section).scrollIntoView(
        {behavior: "smooth"}
    );
}