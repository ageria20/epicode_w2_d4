/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const calcolo = (l1 * l2) / 2;
  return calcolo;
}

console.log(area(5, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    return (sum *= 3);
  } else return sum;
}

console.log(crazySum(2, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  let diff = Math.abs(num - 19);
  if (diff >= 19) return (diff *= 3);
  else return diff;
}

console.log(crazyDiff(7));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (n >= 20 && n <= 100) return true;
  else if (n === 400) return true;
  else return false;
}

console.log(boundary(399));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  const newString = str.split(",");
  if (newString[0] === "EPICODE") return newString.toString();
  else return "EPICODE" + newString.toString();
}

console.log(epify(" Ciao a tutti sono uno studente"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) return true;
  else return "Attenzione il numero insetiro non è multiplo di 3 o 7";
}

console.log(check3and7(22));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  const newString = str.split("");
  console.log(newString);
  str = newString.reverse();
  return str.join("");
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  let newString = str.split("");
  for (i = 0; i < newString.length; i++) {
    let indexPrec = newString[i - 1];
    let index = newString[i];
    if (indexPrec === " ") {
      index.toUpperCase();
    }
  }
  return str.toString();
}

console.log(upperFirst("Ciao a tutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  let newString = str.split("");
  const cut1 = newString.shift();
  //   console.log(newString);
  const cut2 = newString.pop();
  //   console.log(newString);
  return newString.join("");
}

console.log(cutString("Ciao a tutti sono Andrea"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let newArr = [];
  let random;
  for (i = 0; i < n; i++) {
    random = Math.floor(Math.random() * 11);
    newArr.push(random);
  }
  return newArr;
}

console.log(giveMeRandom(10));
