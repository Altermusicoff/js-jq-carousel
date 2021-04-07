// Funzione immagine successiva
function nextImg() {
    var activeImg = $('.active');
    activeImg.removeClass('active');

    if (activeImg.hasClass('lastImg')) {
        activeImg = $('.firstImg');
    } else {
        var nextImg = activeImg.next('img');
        activeImg = nextImg;
    }

    activeImg.addClass('active');

    // Richiamo la funzione di collegamento frecce/pallini
    linkedDotChange(activeImg);

    console.log('Immagine attiva: ' + activeImg[0].alt);
}

// Funzione immagine precedente
function prevImg() {
    var activeImg = $('.active');
    activeImg.removeClass('active');

    if (activeImg.hasClass('firstImg')) {
        activeImg = $('.lastImg');
    } else {
        var nextImg = activeImg.prev('img');
        activeImg = nextImg;
    }

    activeImg.addClass('active');

    // Richiamo la funzione di collegamento frecce/pallini
    linkedDotChange(activeImg);

    console.log('Immagine attiva: ' + activeImg[0].alt);
}

// Funzione cambio pallino collegato alle frecce
function linkedDotChange(activeImg) {
    var dot = $('.dots i');
    var prevDot = $('i.fas');
    prevDot.removeClass('fas');
    prevDot.addClass('far');

    var activeDot = dot.eq(activeImg.attr('data-imgPos')).addClass('fas');
}

// Funzione cambio immagine via Dots
function clickedDot() {
    var dotNumber = $(this).attr('data-imgPos');

    var activeImg = $('img.active');
    activeImg.removeClass('active');

    activeImg = $('img').eq(dotNumber);
    activeImg.addClass('active');

    var prevDot = $('i.fas');
    prevDot.removeClass('fas');
    prevDot.addClass('far');

    var thisDot = $(this);
    thisDot.removeClass('far');
    thisDot.addClass('fas');
}

// Funzione cambio immagine via Arrow Keys su tastiera
function arrowPressed(event) {
    switch (event.keyCode) {
        case 39:
            nextImg();
            break;
        case 37:
            prevImg();
            break;
        default:
            break;
    }
}

function init() {
    // Click avanti
    $('#right-arrow').click(nextImg);
    $('#left-arrow').click(prevImg);

    // Click dots
    $('.dots i').click(clickedDot)

    //Left arrow 
    $(document).keydown(arrowPressed);
}

$(document).ready(init);