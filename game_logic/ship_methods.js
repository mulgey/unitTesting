function checkForShip (player, coordinates) {
	var shipPresent, ship; // ikisini baştan tanımladık
	
	for (var i = 0; i < player.ships.length; i++) { // tüm "oyuncu" "gemi" lerini turladık
		ship = player.ships[i]; // Hangi sıradakiyse o, oyuncunun gemisidir tabi
		
		shipPresent = ship.locations.filter(function (actualCoordinate) { // gemi içerisinde lokasyon değerine ulaştık ve filtreleme fonksiyonunu uyguladık
			return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]); // koordinatları karşılaştırdık
		})[0]; // sadece tutarsa koordinat gelecektir. Boş array in ilk değeri ([0]) undefined olacaktır, yani hata için yeterli
		
		if (shipPresent) {
			return ship;
		} 
	}
	
	return false;
}

function damageShip (ship, coordinates) {
	ship.damage.push(coordinates);
}

function fire (player, coordinates) {
	var ship = checkForShip(player, coordinates);

	if (ship) {
		damageShip(ship, coordinates);
	}	
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;