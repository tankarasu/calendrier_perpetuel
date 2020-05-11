import "./styles.css";

//déclaration de variable
var inputJour = document.getElementById('jour');
var inputMois = document.getElementById('mois');
var inputAnnee = document.getElementById('annee');

var resultat = document.querySelector('.resultat');

// var siecles = (parseInt((annee.value - ans) / 100));

var tableA = [1, 2, 3, 4, 5, 6, 7];
var tableauJour = ["samedi", "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi"];

//evenement
inputJour.addEventListener('change', function() {
  indexAnnee();
  indexSiecle();
  indexMois();
  indexJour();
});

inputMois.addEventListener('change', function() {
  indexAnnee();
  indexSiecle();
  indexMois();
  indexJour();
});
inputAnnee.addEventListener('change', function() {
  indexAnnee();
  indexSiecle();
  indexMois();
  indexJour();
});
//creations des fonctions

function indexAnnee() {
  var ans = parseInt(inputAnnee.value % 100);
  if (ans === 0 || ans === 6 || ans === 17 || ans === 23 || ans === 28 || ans === 34 || ans === 45 || ans === 51 || ans === 56 || ans === 62 || ans === 73 || ans === 79 || ans === 84 || ans === 90) {
    return 0;
  } else if (ans === 1 || ans === 7 || ans === 12 || ans === 18 || ans === 29 || ans === 35 || ans === 40 || ans === 46 || ans === 57 || ans === 63 || ans === 68 || ans === 74 || ans === 85 || ans === 91 || ans === 96) {
    return 1;
  } else if (ans === 2 || ans === 13 || ans === 19 || ans === 24 || ans === 30 || ans === 41 || ans === 47 || ans === 52 || ans === 58 || ans === 69 || ans === 75 || ans === 80 || ans === 86 || ans === 97) {
    return 2;
  } else if (ans === 3 || ans === 8 || ans === 14 || ans === 25 || ans === 31 || ans === 36 || ans === 42 || ans === 53 || ans === 59 || ans === 64 || ans === 70 || ans === 81 || ans === 87 || ans === 92 || ans === 98) {
    return 3;
  } else if (ans === 9 || ans === 15 || ans === 20 || ans === 26 || ans === 37 || ans === 43 || ans === 48 || ans === 54 || ans === 65 || ans === 71 || ans === 76 || ans === 82 || ans === 93 || ans === 99) {
    return 4;
  } else if (ans === 4 || ans === 10 || ans === 21 || ans === 27 || ans === 32 || ans === 38 || ans === 49 || ans === 55 || ans === 60 || ans === 66 || ans === 77 || ans === 83 || ans === 88 || ans === 94) {
    return 5;
  } else if (ans === 5 || ans === 11 || ans === 16 || ans === 22 || ans === 33 || ans === 39 || ans === 44 || ans === 50 || ans === 61 || ans === 67 || ans === 72 || ans === 78 || ans === 89 || ans === 95) {
    return 6;
  }
}

function indexSiecle() {
  var ans = parseInt(inputAnnee.value % 100);
  if ((parseInt((annee.value - ans) / 100)) === 17 || (parseInt((annee.value - ans) / 100)) === 21) {
    return (tableA[indexAnnee()] + 5) % 7;
  } else if ((parseInt((annee.value - ans) / 100)) === 18 || (parseInt((annee.value - ans) / 100)) === 22) {
    return (tableA[indexAnnee()] + 3) % 7;
  } else if ((parseInt((annee.value - ans) / 100)) === 15 || (parseInt((annee.value - ans) / 100)) === 19 || (parseInt((annee.value - ans) / 100)) === 23) {
    return (tableA[indexAnnee()] + 1) % 7;
  } else if ((parseInt((annee.value - ans) / 100)) === 16 || (parseInt((annee.value - ans) / 100)) === 20 || (parseInt((annee.value - ans) / 100)) === 24) {
    return tableA[indexAnnee()];
  }
};

function indexMois() {
  var indexDesMois = 0;
  if (inputMois.value === "Mai") {
    indexDesMois = 0;
  } else if (inputMois.value === "Aou" || inputMois.value === "Fev") {
    indexDesMois = 1;
  } else if (inputMois.value === "Mar" || inputMois.value === "Nov") {
    indexDesMois = 2;
  } else if (inputMois.value === "Jui") {
    indexDesMois = 3;
  } else if (inputMois.value === "Sep" || inputMois.value === "Dec") {
    indexDesMois = 4;
  } else if (inputMois.value === "Avr" || inputMois.value === "Jul" || inputMois.value === "Jan") {
    indexDesMois = 5;
  } else if (inputMois.value === "Oct") {
    indexDesMois = 6;
  };
  if ((inputAnnee.value % 4 === 0 && inputAnnee.value % 100 !== 0) || inputAnnee.value % 400 === 0) {
    if (inputMois.value === "Jan" || inputMois.value === "Fev") {
      return ((tableA[indexDesMois] + indexSiecle()) % 7);
    } else {
      return ((tableA[indexDesMois] + indexSiecle()) % 7);
    }
  } else {
    if (inputMois.value === "Jan" || inputMois.value === "Fev") {
      return ((tableA[indexDesMois] + indexSiecle()) % 7) + 1;
    } else {
      return ((tableA[indexDesMois] + indexSiecle()) % 7);
    }
  }
}

function indexJour() {
  var indexDuJour = parseInt(((inputJour.value % 7) - 1 + indexMois()) % 7);
  resultat.textContent = tableauJour[indexDuJour];
}
