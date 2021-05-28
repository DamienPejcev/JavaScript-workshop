$('#first').click(() => {
    console.log('Yeah, you clicked me to the console when the user clicks on the button.');
});

$('#second').click(() => {
    $('#first').text('Haha!');
});

$('#third').click(() => {
    $('#first').css('background-color', 'red');
    $('#second').css('background-color', 'green');
    $('#third').css('background-color', 'purple');
});
