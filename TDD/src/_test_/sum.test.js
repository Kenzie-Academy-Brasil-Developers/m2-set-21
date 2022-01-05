const Calculadora = require('../models/Calculadora');

test('adds 1 + 2 to equal 3', () => {

    const calculadoraSum = new Calculadora()
    expect(calculadoraSum.sum(1, 2)).toBe(3)

});

test('subtract 2 - 2 to equal 0', () => {

    const calculadoraSubtract = new Calculadora()
    expect(calculadoraSubtract.subtract(2, 2)).toBe(0)
    
});

test('multiplay 2 * 2 to equal 4', () => {

    const calculadoraMultiplay = new Calculadora()
    expect(calculadoraMultiplay.multiplay(2, 2)).toBe(4)
    
});