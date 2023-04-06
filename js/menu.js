$(document).ready(function () {
    $('#icon--menu').click(function () {
        $(this).toggleClass('active');
        $('#icon--menu--list').toggleClass('active');
    });
});