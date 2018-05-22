const assert    = require('chai').assert,
    random      = require('../appTest').random,
    options     = require('../appTest').options,
    winner      = require('../appTest').winner;

let varTest     = 0,
    getOption   = '';

describe('Test para la aplicación Piedra, Papel o Tijera: ', () => {
    describe('Testeando la función addTested: ', () => {
        it('Verificando que no sea un NaN', () => {
            // Verifica si no es un NaN
            assert.isFinite(
                random(1, 5), 'Mielda es un NaN'
            );
        });
        it('La función tiene que retonar valores entre el 0 y el 2', () => {
            assert.include(
                [0,1,2], varTest = random(0,2)
            );
        });
        it('La función options tiene que retornar las siguientes opciones piedra, papel y tijera', () => {
            assert.include(
                ['piedra', 'papel', 'tijera'], getOption = options(varTest)
            );
        });
    });
});