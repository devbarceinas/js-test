'use strict';
//   Genero un número aleatorio entre un rango de enteros.
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const options = (value) => {
    const arrOption = ["piedra", "papel", "tijera"];
    const arrOptionsValues = arrOption[value];
    return arrOptionsValues;
}

const winner = (user, value) => {

    let goodWinner = '';

    if (user === value) {
        goodWinner = 'Empate';
    }

    if (user === 'piedra' && value === 'tijera') {

        goodWinner = `User: ${user}`;
    
    } if (user === 'tijera' && value === 'papel') {
    
        goodWinner = `User: ${user}`;
    
    } if (user === 'papel' && value === 'piedra') {
    
        goodWinner = `User: ${user}`;
    
    } if (value === 'piedra' && user === 'tijera') {
    
        goodWinner = `Termineitor: ${value}`;
    
    } if (value === 'tijera' && user === 'papel') {
    
        goodWinner = `Termineitor: ${value}`;
    
    } if (value === 'papel' && user === 'piedra') {
    
        goodWinner = `Termineitor: ${value}`;
    
    }

    return goodWinner;
};

console.log(
    winner(
        options(random(0,2)), 
        options(random(0,2))
    ));
