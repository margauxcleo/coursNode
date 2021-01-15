// Méthode 1
// on créer une variable dans laquelle on va appeler notre module lodash
var math = require('lodash');
// on appelle les modules qu'on a crée et sauvergarder à ce chemin
var mod = require('./mesModules');


// méthode map() permet de créer un tableau de valeurs 
console.log(math.map([1, 5, 3], function(a) {
    return a * 2;
}));


// Méthode 2
// on importe les modules créés sur mesModules
// avec méthode export module 1, on appelle toute la page donc toutes les méthodes
// mod();
// avec méthode export module 2, on appelle seulement la méthode direBonjour()
// mod.direBonjour();

// Méthode 3 
// On a donné un nom d'export à notre méthode DireBonjour qui est sayHello
// on importe donc ici sayHello
mod.sayHello();

// -------------------------------------------

// Exercice 
// Utiliser le module os pour afficher :
// L'architecture de votre machine
// Le nombre de CPU
// Le hostname
// Et la charge moyenne
var os = require('os');
console.log("Architecture: " + os.arch());
console.log("CPU: " + os.cpus().length);
console.log("Hostname: " + os.hostname());
console.log("Charge moyenne:" + os.loadavg());

// -------------------------------------------
// On appelle le module HTTP
var http = require('http');

// On créé notre serveur 
// le serveur reçoit de req requêtes et des res reponses
// var server = http.createServer(function(req, res){
//     // réponse si ok = 200
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     // affichera ce message 
//     // res.end('Hello World');
//     //avec write, on écrit le code HTML comme ci-dessous
//     res.write(
//     '<!DOCTYPE html>'+ 
//         '<html>' +
//         '   <head>' +
//         '   <meta charset="UTF-8" />' +
//         '       <title>Ma page Node JS</title>' +
//         '   </head>' +
//         '   <body>' +
//         '       <h1>Hello world</h1>' +
//     '       </body>'+
//         '<html>'
//     );
// });


// on lance la commande node serveur.js pour lancer le serveur
// dans le navigateur, localhost8080 est la requête
// le navigateur affichera donc Hello World

// -----------------------------------------
// on installe le module url npm i url
// on le récupère dans la variable url
var url = require('url');
// http://localhost:8080/mapage
// http://localhost:8080

// var server = http.createServer(function (req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     res.write('Hello world, this is your requested page : ' + page);
//     res.end();
// });

// ----------------------------------------
// on installe le module query string npm i query-string
// on le récupère dans la variable query string
var querystring = require('querystring');
// http://localhost:8080?prenom=john&nom=wick
// var server = http.createServer(function (req, res) {
//     var params = querystring.parse(url.parse(req.url).
//         query);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if ('prenom' in params && 'nom' in params) {
//         res.write('Vous etes ' + params['prenom'] + ' ' +
//             params['nom']);
//     }
//     else {
//         res.write('Vous devez bien avoir un prenom et un nom, non ?');
//     }
//     res.end();
// });

//-------------------------------------------
// Ecrire un programme qui affiche le resultat d'une operation
// arithmetique des nombres passes en parametre
// on envoi un calcul et le browser renvoi la rep
// http://localhost:8080?a=2&b=5
// http://localhost:8080/addition?a=2&b=5
// http://localhost:8080/soustract?a=2&b=5
// http://localhost:8080/multipli?a=2&b=5
// http://localhost:8080/division?a=2&b=5

var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).
        query);
    var ope = url.parse(req.url).pathname;
    var result = 0;
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('a' in params && 'b' in params) {
        //addition
        if (ope === '/addition'){
            result = parseInt(params['a']) + parseInt(params['b']);
            res.write('Résultat: ' + params['a'] + '+' + params['b'] + '=' + result);
        }
        // soustraction
        else if (ope === '/soustract'){
            result = parseInt(params['a']) - parseInt(params['b']);
            res.write('Résultat: ' + params['a'] + '-' + params['b'] + '=' + result);
        }
        // multiplication
        else if (ope === '/multipli'){
            result = parseInt(params['a']) * parseInt(params['b']);
            res.write('Résultat: ' + params['a'] + '*' + params['b'] + '=' + result);
        }
        // division
        else if (ope === '/division'){
            result = parseInt(params['a']) / parseInt(params['b']);
            res.write('Résultat: ' + params['a'] + '/' + params['b'] + '=' + result);
        }
        else {
            res.write('Pas de chiffres passés en paramètres ?');
        }
        res.end();
    }   
});

// CORRECTION

function calcul(tab, operator) {
    var result = '';
    for (var i in tab) {
        result = result + operator + tab[i];
    }
    return eval(result.substr(1));
}

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    var result;
    if (pathname === '/addition') {
        result = calcul(params, '+');
    } else if (pathname === '/soustraction') {
        result = calcul(params, '-');
    } else if (pathname === '/multiplication') {
        result = calcul(params, '*');
    } else if (pathname === '/division') {
        result = calcul(params, '/');
    }
    res.write('Resultat : ' + result);
    res.end();
});


// on doit spécifier sur quel serveur on travaille 
// on appelle la var server 
server.listen(8080);
