/**
 * Function finds prime numbers in range of given number
 *
 * @param N input - number
 * @returns {Object[]} list - prime numbers
 */
 
function primeNumbers(N) {
	var list = [];
	for (var i = 1; i <= N; i++) {
		var count = 0;
		for (var j = 1; j < i; j++) {
			if (i % j === 0) {
				count++
			}
		}
		
		if (count < 2) {
			list.push(i);
		}
		
	}
	return list;
}