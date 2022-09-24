// Show & Hide plugin
$(document).ready(function() {

    $('#tab-one').click(function() {
        $('#tab1').show();
        $('#tab2').hide();
        $('#tab3').hide();
    });

    $('#tab-two').click(function() {
        $('#tab1').hide();
        $('#tab2').show();
        $('#tab3').hide();
    });

    $('#tab-three').click(function() {
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').show();
    });

});