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



$('#forth').click(() => {
    let x = document.getElementById("input").value
    if(x===blue){
    if(x==='white'){
        $('#forth').css('color', 'black');
        $('#forth').css('background-color', `${x}`);
    }else {
    $('#forth').css('background-color', `${x}`);
    $('#forth').css('color', 'white');
    };
};
});

