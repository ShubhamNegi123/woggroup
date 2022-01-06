$(document).ready(function(){
    showingNavButton();
    getScrollTopValue();



// function for scrill top value
function getScrollTopValue(){
    $('header').css({
        background : '#fff',
        boxShadow : '0px 0px 5px 2px #ddd4d4'
    });
}
 // function for scrill top value
 function showingNavButton(){
     $('.nav-button').click(function(){
        $('nav').css({
            textAlign : 'center',
            marginTop : '15px'
        });
        $('nav ul').css({
            flexDirection: 'column'
        });
        $('nav ul li').css({
            marginBottom : '10px',
        });
        $('nav').slideToggle();
        
     });
 }


});
