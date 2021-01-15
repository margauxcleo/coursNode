// on require un module node déjà existant
// fs = file system => librairie qui appartient au noyau node
var fs = require('fs');

const fsPath = require('fs-path');

// // Méthode qui va lire le fichier salutations.txt
// // et qui va l'afficher en console

// var content = fs.readFileSync('./salutations.txt');
// // toString() = méthode pour afficher en chaîne de caractères
// console.log(content.toString());
// console.log('FIN DU FICHIER');

// Exercice 1
// Ecrire un programme NodeJS qui permet de creer un repertoire
// monDossier et trois fichiers file1.txt, file2.txt et
// file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions asynchrones

// Exercice 1 - SYNCHRONE 

// // on créé le répertoire
// var mkDir = (dirName) => {
//     fs.mkdirSync(dirName, { recursive: true }, (err) => {
//         if (err) {
//             console.error('Erreur à la création du dossier');
//         }
//         return console.log('Le nouveau dossier est a été créé.');
//     });
// };

// // On crée les 3 fichiers de manière async
// // On veut vérifier que le dossier soit créé
// var createFile = (filePath, fileContent) => {
//     fs.stat(filePath, function(err) {
//         if (!err) {
//             console.log('Répertoire inexistant.');
//         }
//         else {
//             fs.writeFileSync(filePath, fileContent, function (err) {
//                 if (err) {
//                     return console.error('impossible de créer le fichier', err);
//                 }
//                 return console.log('Le fichier est créé.');
//             });
//         }
//     });
// }

// let dossier = 'monDossier';
// let path = 'monDossier/';
// let file1 = 'file1';
// let file2 = 'file2';
// let file3 = 'file3';

// mkDir(dossier);
// createFile(path, file1);
// createFile(path, file2);
// createFile(path, file3);

// CORRECTION 
var file = ["file1.txt", "file2.txt", "file3.txt"];
if (fs.existsSync('monDossier')) {
    console.error('dossier existe deja');
}
else {
    for (let i = 0; i < file.length; i++) {
        fsPath.writeFileSync('monDossier /' + file[i], 'contenu fichier');
    }
};
