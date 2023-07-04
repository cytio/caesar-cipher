'use strict'

document.addEventListener('DOMContentLoaded', geladen); /// Das Dokument wird vollständig geladen bevor allem.

function werteAufnahme() {
    const ausgabeFeld = document.querySelector('#ausgabe');
    let text = document.getElementById('text').value;
    let nr = parseInt(document.getElementById('nummer').value);
    let cypherText = caesar(text, nr);
    console.log("CypherText: " + cypherText);
    ausgabeFeld.textContent = cypherText;
}

// Code für Verschlüsselung
const caesar = (text, nr) => {
    let newText = "";
    let zwischenWert = 0;
    let pruefWert = 0;

    if (nr % 26 == 0) {  // Bedingung: Nummer ist gleichgroß wie Alphabetlaenge
        return text;
    }
    else if (nr > 26) {   // Nummer ist laenger als das Alphabet
        nr -= 26;
        for (let i = 0; i < text.length; i++) {
            zwischenWert = text.charCodeAt(i);
            newText += String.fromCharCode(zwischenWert + nr);
            console.log("newText: " + newText);
        }
        text = newText;
        return text;
    }
    else if (nr < -26) {  // Nummer ist laenger als das Alphabet (negative Richtung)
        nr += 26;
        for (let i = 0; i < text.length; i++) {
            zwischenWert = text.charCodeAt(i);
            newText += String.fromCharCode(zwischenWert + nr);
            console.log("newText: " + newText);
        }
        text = newText;
        return text;
    }
    else {
        for (let i = 0; i < text.length; i++) {
            zwischenWert = text.charCodeAt(i);
            pruefWert = zwischenWert + nr;
            if (zwischenWert >= 65 && zwischenWert <= 90) {  // Ziffer wird geprueft ob Grossbuchstabe
                if (pruefWert >= 91) {
                    pruefWert -= 26;
                    newText += String.fromCharCode(pruefWert);
                }
                else if (pruefWert <= 64) {
                    pruefWert += 26;
                    newText += String.fromCharCode(pruefWert);
                }
                else {
                    newText += String.fromCharCode(pruefWert);
                }
            }
            else if (zwischenWert >= 97 && zwischenWert <= 122) {  // Ziffer wird geprueft ob Kleinbuchstabe
                if (pruefWert >= 123) {
                    pruefWert -= 26;
                    newText += String.fromCharCode(pruefWert);
                }
                else if (pruefWert <= 96) {
                    pruefWert += 26;
                    newText += String.fromCharCode(pruefWert);
                }
                else {
                    newText += String.fromCharCode(pruefWert);
                }
            }
        }
        text = newText;
        return text;
    }
}

function geladen() {
    //const ausgabeFeld = document.getElementById('ausgabe');
    const encrypterButton = document.getElementById('encrypt');
    const resetButton = document.getElementById('reset');

    encrypterButton.addEventListener('click', werteAufnahme);
    
    resetButton.addEventListener('click', () => {
        const ausgabeFeld = document.querySelector('#ausgabe');
        const textFeld = document.getElementById('text');
        const zahlenFeld = document.getElementById('nummer');
        textFeld.value = "";
        zahlenFeld.value = "";
        ausgabeFeld.textContent = "###";
    });
}
