// Credits to GEORGE ANTONIOUS for this javascript - https://github.com/gantonious
// 

$(window).ready(function() { 
    // project selector code
    $('.project_button').on('click', function() {
        // resets button colors
        $('.project_button').css('color', '#FEFAFF');
        $('.project_button').css('background-color', '#35343B');
        // updates clicked buttons color
        $(this).css('color', '#35343B');
        $(this).css('background-color', '#FEFAFF');
        // loads content
        $('#viewer').html($('#PRJ' + $(this).attr('button-id')).html());
        $('#description').html($('#DES' + $(this).attr('button-id')).html());
    });
});