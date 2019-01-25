var expect = require('chai').expect; // = vira

// Test suite (ilişkili olup aynı fonksiyonu test ederler)
describe('checkForShip', function () { // içerideki tüm testleri açıklayan bir isim
	var checkForShip = require('../game_logic/ship_methods').checkForShip;
	
	// Test spec (her bir ayrı test)
	it('should correctly report no ship at a given players coordinate', function () { // string = istenilen davranışı açıklar. fonksiyon = tüm mantığı bir arada tutar
		
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};
		
		expect(checkForShip(player, [9, 9])).to.be.false; // fonksiyonda bu (player, coordinates) olarak yer almıştı
	});
	
	it('should correctly report a ship located at the given coordinates', function () {
		
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};
		
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
	});
	
	it('should handle ships located at more than one coordinate', function () {
		
		player = {
			ships: [
				{
					locations: [[0, 0], [0, 1]]
				}
			]
		};
		
		expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);			
		expect(checkForShip(player, [9, 9])).to.be.false;
	});
	
	it('should handle checking multiple ships', function () {
		
		player = {
			ships: [
				{
					locations: [[0, 0], [0, 1]]
				},
				{
					locations: [[1, 0], [1, 1]]
				},
				{
					locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
				}
			]
		};
		
		expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);	
		expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);	
		expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
		expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);	
		expect(checkForShip(player, [9, 9])).to.be.false;
	});
});

describe('damageShip', function () {
	var damageShip = require('../game_logic/ship_methods').damageShip;
	
	it('should register damage on a given ship at a given location', function () {
		var ship = {
			locations: [[0, 0]],
			damage: []
		};
		
		damageShip(ship, [0, 0]);
		
		expect(ship.damage).to.not.be.empty; // Boş olmasın
		expect(ship.damage[0]).to.deep.equal([0, 0]); // Derinden eşit olsun, tam olarak
	});
});

describe('fire', function () {
	var fire = require('../game_logic/ship_methods').fire;
	
	it('should record damage on the given players ship at a given coordinate', function () {
		var player = {
			ships: [
				{
					locations: [[0, 0]],
					damage: []
				}
			]
		};
		
		fire(player, [0, 0]);
		
		expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
	});
	
	it('should NOT record damage if there is no ship at my coordinates', function () {
		var player = {
			ships: [
				{
					locations: [[0, 0]],
					damage: []
				}
			]
		};
		
		fire(player, [9, 9]);
		
		expect(player.ships[0].damage).to.be.empty;
	});
});



