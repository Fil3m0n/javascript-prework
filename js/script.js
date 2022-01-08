function getMoveName(argMoveId){
   
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nozyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

function displayResult(argComputerMove, argPlayerMove){
  
     printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
     if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Computer wygrywa!');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
        printMessage('Computer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
        printMessage('Computer wygrywa!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Przegrywasz walkowerem!');
    }
  }


  
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

// if(randomNumber == 1){
//   computerMove = 'kamień';
// } else if (randomNumber == 2){
//     computerMove = 'papier';
// } else if (randomNumber == 3){
//     computerMove = 'nozyce';
// }

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

// if(playerInput == '1'){
//   playerMove = 'kamień';
// } else if (playerInput =='2'){
//     playerMove = 'papier';
// } else if (playerInput =='3'){
//     playerMove = 'nozyce';
// }

printMessage('Twój ruch to: ' + argPlayerMove);

displayResult(argComputerMove, argPlayerMove);



