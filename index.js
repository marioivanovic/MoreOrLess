var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();
console.log('Donnez un chiffre entre 1 et 100 :');
//
// Get two properties from the user: username and email
//
var random = Math.floor((Math.random() * 100) + 1);
prompt.get(['number'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('Number choosen: ' + result.number);
    console.log('Nombre mystère:' + result.random);
});
});
