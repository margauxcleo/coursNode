// on créé la méthode direBonjour
// var direBonjour = function() {
//     console.log('Bonjour');
// };

// on exporte notre méthode et on l'ajoute à nos modules pr pouvoir l'utiliser ailleurs
// module.exports = direBonjour;

// autre façon de créer la méthode et de l'exporter
// exports.direBonjour = function() {
//     console.log('Bonjour');
// }

// Création d'une autre méthode 
var direBonjour = function() {
    console.log('Bonjour');
};

var direBonsoir = function() {
    console.log('Bonsoir');
};

// on donne ici un nom d'export à la méthode direBonjour => sayHello
// on appelera donc sayHello pour l'import de la méthode
module.exports = {sayHello : direBonjour};


