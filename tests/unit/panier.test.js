const { total } = require('../../src/panier');
 
describe('total()', () => {
  test('calcule le total du panier', () => {
    // Arrange : préparer les données
    const items = [{ prix: 10, qte: 2 }, { prix: 5, qte: 1 }];
    // Act : exécuter la fonction
    const resultat = total(items);
    // Assert : vérifier le résultat
    expect(resultat).toBe(25);
  });
});
 test('retourne 0 pour un panier vide', () => {
    expect(total([])).toBe(0);
  });
 
  test('ignore une ligne dont la quantité est 0', () => {
    const items = [{ prix: 10, qte: 0 }, { prix: 5, qte: 2 }];
    expect(total(items)).toBe(10);
  });