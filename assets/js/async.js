// on require un module node déjà existant
// fs = file system => librairie qui appartient au noyau node
var fs = require('fs');

// on met en place une fonction callback 
var content = fs.readFile('./salutations.txt', function (err, result) {
    if(err) {
        return console.error(err);
    }
    // si on a pas d'erreur, on return ce code
    // toString() = méthode pour afficher en chaîne de caractères
    return console.log(result.toString());
});

// s'affichera avant la lecture de la fonction callback
console.log('FIN DU FICHIER');

//Exercice 1
// On crée les 3 fichiers de manière async
// On veut attendre que le dossier soit créé
// on créé le répertoire
// var mkDir = (dirPath) => {
//     fs.mkdir(dirPath, { recursive: true }, (err) => {
//         if (err) {
//             console.error('Erreur à la création du dossier');
//         }
//         else {
//             console.log('Le nouveau dossier est a été crée.')
//         }
//     });
// }

// // On crée les 3 fichiers de manière async
// var createFile = (filePath, fileContent) => {
//     fs.writeFileSync(filePath, fileContent, function (err) {
//         if (err) {
//             return console.error('impossible de créer le fichier', err);
//         }
//         return console.log('Le fichier est créé.');
//     });
// };

// let path = './monDossier';
// let file1 = 'file1';
// let file2 = 'file2';
// let file3 = 'file3';

// mkDir(path);
// createFile(path, file1);
// createFile(path, file2);
// createFile(path, file3);

// CORRECTION
// EN ASYNCHRONE 
var file = ["file1.txt", "file2.txt", "file3.txt"];
fs.access('monDossier/', (err) => {
    if (err) {
        console.log("The folder does not exist, Creation de monDossier/");
        for (let i = 0; i < file.length; i++) {
            fsPath.writeFile('monDossier/' + file[i], 'content', function (err) {
                if (err)
                    return console.error(err);
            });
        } 
    } else {
        console.log("The folder exists.");
    }
});