let array = ['Eliska', 'Anezka', 'Lada', 'Damien', 'Martin'];
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };


array.forEach((name) => {
    if(name==='Damien'){
        $('ul').append(
            `<li><strong>${name}</strong></li>`
        );
    } else {
        $('ul').append(
            `<li>${name}</li>`
        );
    }
});

$('body').append(
    '<div></div>'
);

$('div').append(
    `<h1>${additionalBlock.title}</h1>`
);

$('div').append(
    `<p>${additionalBlock.text}</p>`
);