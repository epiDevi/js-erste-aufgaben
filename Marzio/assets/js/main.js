// ! ==== console.log() ====
// mit console.log() können wir uns Sachen in der Konsole ausgeben lassen. Das werden wir viel zum Testen benötigen
// Am Ende jedes Befehls muss ein Semikolon stehen;
// console.log("Hallo");

// ! ==== Variablen ====
const location2 = "München";
let location1 = "Hamburg";

// - const - Variablen sollen für Werte verwendet werden, die sich nicht ändern.' (zb Name)
// - let - Variablen für Werte die ich später wieder ändern kann (zb spielstand)
// - var - Variable hat man von ECMASCRIPT 6 benutzt. Diese Variable kann man wie let auch änderne (BITTE VAR NICHTMEHR BENUTZEN!)

// ? CONST
// * Stell dir vor, du möchtest eine Variabel deklarieren, um den Namen iner Person zu Speichern. Wenn du den Name einmal zugewsen hast, soll er nichtmehr verändert werden können! In diesem Fall ist "const" deine Wahl!
// const name = "Max"

// ? LET
//  * Jetzt stell die vor, du möchtest eiine variable (Var.) deklarieren, um die Anzahl der Punkte in einem Spiel zu speichern, Diese Variable wird sich im Laufe des Spiels ändern. Daher musst du let benutzen!
// let score = 8;

//  ? Zuwesen udn aufrufen einer Variable
// let
// mit let erstellen wir eine Variable
// let num1 = 1;
// Hier initialisieren wir eine Variable und weisen direkt ein Wert zu

let num1 = 5;
console.log("num1", num1);

let num2 = 55;
console.log("num2", num2);

// mit den {} sehe ich auch der name der Variable ist
let num3 = 44;
console.log({ num3 });

// wir haben hier keine let da wir die Variable schon in Zeile 28 erstellt haben
num1 = 105;
console.log({ num1 });

const num4 = 343;
console.log({ num4 });

// Geht nicht weil num4 eine const ist. Const kann nicht überschrieben werden.
// num4 = 1;
// console.log({ num4 });

// Hier habe ich zwei werte addiert und den Wert mit AddScore verknüpft
const addScore = num4 + num1;
console.log(addScore);

// ! ======= DatenTypen =========

// ? String
// Strings sind Textelemente
// Um einen String müssen wir "" machen
console.log("Hallooooooo");
// Wir könnne auch Zahlen als String ausgeben lassen
console.log("10");
// Strings werden in der Konsole immer weiß angezeigt

// ? Numbers
// Numbers werden in der Konsole blau/lila ausgegeben
console.log(10);
console.log(10 + 4);
console.log("10" + "4");
console.log("4" * 4);

// ? Booleans
// Booleans werden in der Konsole blau/lila ausgegeben
console.log(true);
console.log(false);

// ! ===== Konventionen =====

// selberklärende Namen verwenden
// nicht zu kurz
// nicht zu lang
// Namen dürfen nie mit Zahlen anfangen
// let 2Pac = "Bitte nicht!";
// camelCase

// ! CASE SENSITIVE
// Das sind zwei werte!
let a = 10;
let A = 100;
console.log({ a });
console.log({ A });

// - Beste practice

// camelCase : ersten Buchstabe klein und alles zusammen geschrieben
let meineErsteVariable;
// Am besten direkt in Englsich üben
let myFirstVariable;

// Underscoure
let meine_erste_Variable;

// PascalCase
let MeineErsteVariable;

// Auf-gar-keinen-fall-case
// let $meineErsteVariable;
// let meineerstevariable

//  ! ==== String Concatination ====
// Wir können mehrere Textelemente miteinander verbinden
const firstName = "Bruce";
const lastName = "Wayne";
let adress = "Gothem City";

console.log("Ich bin " + firstName + " " + lastName + " und lebe im " + adress);

const heroName = "Spiderman";
const city = "New York";

console.log("ich bin " + heroName + " und lebe in " + city);

//  ! ==== Arithmetische Operatoren ====

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + y);
// subtahieren
console.log(x - y);
// multiplizieren
console.log(y * z);
// dividieren
console.log(x / y);

// Modulo = RESTWERT!
// Wir gucken, ob eine Restwert bleibt
// % = Modulo Operator

console.log(15 % 5); // 0
console.log(5 % 2); // 1
console.log(10 % 5); // 0
console.log(10 % 4); // 2
console.log(15 % 4); // 3

// - Increment
// Mit ++ wird eins zum voherigen Wert hinzugefügt
let zahl1 = 2;
console.log({ zahl1 });
zahl1++;
zahl1++;
console.log({ zahl1 });

// - Decrement
//  Mit -- wird eins von voherigen Wert abgezogen
let zahl2 = 5;
console.log({ zahl2 });
zahl2--;
zahl2--;
console.log({ zahl2 });

// ! ====== Output =======
console.log("Kenne wir schon");

//  - document.write()
// mit der write() Methode können wir Elemente in unser HTML einfügen
// WICHTIG (Wird immer ans Ende hinzugefügt!)

// So wir ein Text eingefügt
document.write("Hallo Leute");

// Wir könne auch HTML Reinschreiben
document.write("<h2 class='test'> Hallo Nochmal </h2>");

// - window.alert()
// Es öffnet sich ein Popup mit ein Text
// window.alert("Hallooooo");

// ! ===== Input =====

// - window.prompt()
// Damit öffnet sich ein Popup, in dem der Nutze etwas eingeben kann
// window.prompt("Bitte deine namen eingeben:");

// Wenn wir das Ganze in eiiner Var Speichern, bekommen wir in console.log() den wert asugegeben was der nutzer Eingetragen hat,.
// let windowInput = window.prompt("Bitte gib deinen Namen ein:", "Vor- Nachname");
// console.log({ windowInput });

// - window.confirm()
// window.confirm("Stimmen Sie den Cookies zu?");
// Wenn wir das Ganze in einer Variable speichen, bekommen wir in console.log() was der Nutzer ausgewählt hat.
let confirm = window.confirm("Stimmen sie den Cookies zu?");
console.log(confirm);