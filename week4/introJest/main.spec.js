
const soldTikets = require('./main');



describe('test venta de tickets', () => {
  
  test('Dado una cantidad de dinero y un nombre de película debe retornar un ticket', () => {
    const resultSale = soldTikets(10000, 'Batman');
    expect(resultSale).toBeTruthy();
  });
  
  test('Dado una cantidad de dinero inferior al valor de la entrada y un nombre de película debe rechazar la compra un ticket', () => {
    expect(soldTikets(5000, 'Batman')).toBeFalsy();
  });

  test('Dada una película que no se encuentre disponible debe rechazar la venta del ticket', () => {
    expect(soldTikets(10000, 'Amelie')).toBeFalsy();
  })

  test('Dada una cant inferior de dinero y una película no disponible debe rechazar la compra', () => {
    expect(soldTikets(8500, 'Dr Strange')).toBeFalsy();
  })

})
