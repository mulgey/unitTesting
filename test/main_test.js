var expect = require('chai').expect;

// Test suite (ilişkili olup aynı fonksiyonu test ederler)
describe('Mocha', function () {
	// Test spec (unit test)
	it('should run our tests using npm', function () {
		expect(true).to.be.ok; // ok için değer gelmesi yeterli, undefined, 0, false olmaması kâfi
	});
});